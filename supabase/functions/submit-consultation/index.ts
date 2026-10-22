import { createClient } from "npm:@supabase/supabase-js@2";
import { sendTemplateEmail } from "../_shared/transactional-email-templates/send-email.ts";
import { acceptsSubmissionTiming, notificationOptions, PRACTICE_INBOX, requireNotificationSent } from "../_shared/consultation-notification.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const allowedContactMethods = new Set(["email", "phone"]);
const allowedServices = new Set([
  "individual",
  "couple-family",
  "group",
  "psychological-astrology",
  "workshops-training",
  "training-supervision",
  "not-sure",
]);
const allowedPreferences = new Set(["online", "in-person", "either"]);

const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }

  try {
    const body = await request.json();
    const name = clean(body.name);
    const contact = clean(body.contact);
    const preferredContactMethod = clean(body.preferredContactMethod);
    const serviceInterest = clean(body.serviceInterest);
    const sessionPreference = clean(body.sessionPreference);
    const message = clean(body.message);
    const website = clean(body.website);
    const elapsedMs = Number(body.elapsedMs);

    if (!acceptsSubmissionTiming(website, elapsedMs)) {
      return new Response(JSON.stringify({ error: "Unable to accept this submission." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!name || name.length > 100 || contact.length < 3 || contact.length > 255 ||
      !allowedContactMethods.has(preferredContactMethod) || !allowedServices.has(serviceInterest) ||
      !allowedPreferences.has(sessionPreference) || message.length > 1000 || body.consentGiven !== true) {
      return new Response(JSON.stringify({ error: "Please check the form and try again." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const validPhone = /^\+?[0-9 ()-]{7,20}$/.test(contact);
    if ((preferredContactMethod === "email" && !validEmail) || (preferredContactMethod === "phone" && !validPhone)) {
      return new Response(JSON.stringify({ error: "Please enter valid contact information." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) throw new Error("Missing backend configuration");

    const client = createClient(supabaseUrl, serviceRoleKey);
    const { data: submission, error } = await client.from("consultation_enquiries").insert({
      name,
      contact,
      preferred_contact_method: preferredContactMethod,
      service_interest: serviceInterest,
      session_preference: sessionPreference,
      message: message || null,
      consent_given: true,
    }).select("id, created_at").single();
    if (error) throw error;
    if (!submission) throw new Error("Enquiry was not saved");

    const result = await sendTemplateEmail("consultation-notification", PRACTICE_INBOX,
      notificationOptions({ name, contact, preferredContactMethod, serviceInterest, sessionPreference, message }, submission.id, submission.created_at));
    requireNotificationSent(result);

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Consultation submission failed:", error instanceof Error ? error.message : "Unknown error");
    return new Response(JSON.stringify({ error: "We could not send your enquiry. Please try again." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});