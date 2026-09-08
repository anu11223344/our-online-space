import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Loader2, Mail, Phone } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be under 100 characters."),
  contact: z.string().trim().min(3, "Please enter an email address or phone number.").max(255),
  preferredContactMethod: z.enum(["email", "phone"], { required_error: "Choose how you would like to be contacted." }),
  serviceInterest: z.enum(["individual", "couple-family", "group", "psychological-astrology", "workshops-training", "training-supervision", "not-sure"], { required_error: "Choose a service or select Not sure." }),
  sessionPreference: z.enum(["online", "in-person", "either"], { required_error: "Choose a session preference." }),
  message: z.string().trim().max(1000, "Message must be under 1,000 characters."),
  consentGiven: z.literal(true, { errorMap: () => ({ message: "Please confirm that you have read the Privacy Policy." }) }),
}).superRefine((data, context) => {
  if (data.preferredContactMethod === "email" && !z.string().email().safeParse(data.contact).success) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["contact"], message: "Enter a valid email address." });
  }
  if (data.preferredContactMethod === "phone" && !/^\+?[0-9 ()-]{7,20}$/.test(data.contact)) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["contact"], message: "Enter a valid phone number." });
  }
});

type FormFields = {
  name: string;
  contact: string;
  preferredContactMethod: "" | "email" | "phone";
  serviceInterest: "" | "individual" | "couple-family" | "group" | "psychological-astrology" | "workshops-training" | "training-supervision" | "not-sure";
  sessionPreference: "" | "online" | "in-person" | "either";
  message: string;
  consentGiven: boolean;
  website: string;
};

const initialFields: FormFields = { name: "", contact: "", preferredContactMethod: "", serviceInterest: "", sessionPreference: "", message: "", consentGiven: false, website: "" };

const Contact = () => {
  const startedAt = useMemo(() => Date.now(), []);
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
    if (status !== "idle") setStatus("idle");
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(fields);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => { nextErrors[String(issue.path[0])] = issue.message; });
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");
    const { error } = await supabase.functions.invoke("submit-consultation", {
      body: { ...parsed.data, website: fields.website, elapsedMs: Date.now() - startedAt },
    });
    if (error) {
      setStatus("error");
      return;
    }
    setFields(initialFields);
    setErrors({});
    setStatus("success");
  };

  const errorFor = (field: keyof FormFields) => errors[field] ? <p id={`${field}-error`} className="mt-2 text-sm text-destructive">{errors[field]}</p> : null;

  return (
    <>
      <SEO
        title="Contact & Booking | Inner Horizon"
        description="Book a consultation with Dr. Rajat K. Thukral. In-person sessions in Greater Kailash-II, New Delhi and online sessions across India."
        canonical="https://www.innerhorizon.in/contact"
      />
      <main className="min-h-screen bg-background">
      <section className="page-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-primary">Contact</p>
            <h1 className="page-title mb-6">Book a consultation</h1>
            <p className="measure text-lg text-foreground/80">After you reach out, Dr. Rajat K. Thukral will contact you to arrange a first conversation about fit and availability. There is no obligation to continue.</p>

            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <a className="focus-ring flex items-center gap-3 font-medium text-primary hover:text-deep-forest" href="tel:+919205500670"><Phone className="h-5 w-5" aria-hidden="true"/>+91 92055 00670</a>
              <a className="focus-ring flex items-center gap-3 break-all font-medium text-primary hover:text-deep-forest" href="mailto:innerhorizoncare@gmail.com"><Mail className="h-5 w-5 shrink-0" aria-hidden="true"/>innerhorizoncare@gmail.com</a>
            </div>

            <aside className="mt-10 border-l-2 border-primary bg-muted p-5 text-sm leading-relaxed text-foreground/80">
              This form is for non-urgent enquiries and is not monitored as a crisis service. For immediate risk to safety, contact local emergency services or see <Link className="font-medium text-primary underline underline-offset-4" to="/crisis-support">Crisis Support</Link>.
            </aside>
          </div>

          <form className="space-y-6 border border-border bg-card p-6 shadow-gentle sm:p-8" onSubmit={submit} noValidate>
            <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" autoComplete="name" value={fields.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}/>{errorFor("name")}</div>

            <div className="space-y-2"><Label htmlFor="contact">Email or phone</Label><Input id="contact" autoComplete={fields.preferredContactMethod === "phone" ? "tel" : "email"} value={fields.contact} onChange={(event) => update("contact", event.target.value)} aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "contact-error" : undefined}/>{errorFor("contact")}</div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2"><Label>Preferred contact method</Label><Select value={fields.preferredContactMethod} onValueChange={(value: "email" | "phone") => update("preferredContactMethod", value)}><SelectTrigger aria-label="Preferred contact method" aria-invalid={Boolean(errors.preferredContactMethod)}><SelectValue placeholder="Select method"/></SelectTrigger><SelectContent><SelectItem value="email">Email</SelectItem><SelectItem value="phone">Phone</SelectItem></SelectContent></Select>{errorFor("preferredContactMethod")}</div>
              <div className="space-y-2"><Label>Online or in person</Label><Select value={fields.sessionPreference} onValueChange={(value: "online" | "in-person" | "either") => update("sessionPreference", value)}><SelectTrigger aria-label="Session preference" aria-invalid={Boolean(errors.sessionPreference)}><SelectValue placeholder="Select preference"/></SelectTrigger><SelectContent><SelectItem value="online">Online</SelectItem><SelectItem value="in-person">In person</SelectItem><SelectItem value="either">Either</SelectItem></SelectContent></Select>{errorFor("sessionPreference")}</div>
            </div>

            <div className="space-y-2"><Label>Service of interest</Label><Select value={fields.serviceInterest} onValueChange={(value: FormFields["serviceInterest"]) => update("serviceInterest", value)}><SelectTrigger aria-label="Service of interest" aria-invalid={Boolean(errors.serviceInterest)}><SelectValue placeholder="Select a service"/></SelectTrigger><SelectContent><SelectItem value="individual">Individual therapy</SelectItem><SelectItem value="couple-family">Couple and family therapy</SelectItem><SelectItem value="group">Group therapy</SelectItem><SelectItem value="psychological-astrology">Jungian psychological–astrology consultation</SelectItem><SelectItem value="workshops-training">Workshops and training</SelectItem><SelectItem value="training-supervision">Training and supervision</SelectItem><SelectItem value="not-sure">Not sure</SelectItem></SelectContent></Select>{errorFor("serviceInterest")}</div>

            <div className="space-y-2"><Label htmlFor="message">Brief message <span className="font-normal text-foreground/60">(optional)</span></Label><Textarea id="message" rows={5} maxLength={1000} placeholder="Please keep this brief and do not include diagnosis, crisis details, or clinical history." value={fields.message} onChange={(event) => update("message", event.target.value)}/><p className="text-right text-xs text-foreground/60">{fields.message.length}/1000</p>{errorFor("message")}</div>

            <div className="sr-only" aria-hidden="true"><Label htmlFor="website">Website</Label><Input id="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => update("website", event.target.value)}/></div>

            <div className="flex items-start gap-3"><Checkbox id="consent" checked={fields.consentGiven} onCheckedChange={(checked) => update("consentGiven", checked === true)} aria-describedby={errors.consentGiven ? "consentGiven-error" : undefined}/><div><Label htmlFor="consent" className="cursor-pointer leading-relaxed">I have read the <Link className="text-primary underline underline-offset-4" to="/privacy">Privacy Policy</Link> and consent to my enquiry being used to contact me.</Label>{errorFor("consentGiven")}</div></div>

            {status === "success" && <p role="status" className="border-l-2 border-primary bg-muted p-4 text-sm text-foreground">Thank you. Your enquiry has been sent, and Dr. Rajat K. Thukral will contact you.</p>}
            {status === "error" && <p role="alert" className="border-l-2 border-destructive bg-destructive/5 p-4 text-sm text-destructive">Your enquiry could not be sent. Please try again, call, or email.</p>}

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>{status === "loading" && <Loader2 className="animate-spin" aria-hidden="true"/>}{status === "loading" ? "Sending…" : "Send enquiry"}</Button>
          </form>
        </div>
      </section>
    </main>
    </>
  );
};

export default Contact;