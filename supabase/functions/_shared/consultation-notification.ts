export const PRACTICE_INBOX = "innerhorizoncare@gmail.com";

const services: Record<string, string> = {
  individual: "Individual therapy", "couple-family": "Couple and family therapy",
  group: "Group therapy", "psychological-astrology": "Jungian psychological–astrology consultation",
  "workshops-training": "Workshops and training", "training-supervision": "Training and supervision", "not-sure": "Not sure",
};
const preferences: Record<string, string> = { online: "Online", "in-person": "In person", either: "Either" };

export function acceptsSubmissionTiming(website: string, elapsedMs: number) {
  return !website && Number.isFinite(elapsedMs) && elapsedMs >= 0;
}

export function notificationOptions(enquiry: {
  name: string; contact: string; preferredContactMethod: string;
  sessionPreference: string; serviceInterest: string; message: string;
}, submissionId: string, submittedAt: string) {
  return {
    idempotencyKey: `consultation-notification-${submissionId}`,
    replyTo: enquiry.preferredContactMethod === "email" ? enquiry.contact : undefined,
    templateData: {
      name: enquiry.name, contact: enquiry.contact,
      preferredContactMethod: enquiry.preferredContactMethod === "email" ? "Email" : "Phone",
      sessionPreference: preferences[enquiry.sessionPreference],
      serviceInterest: services[enquiry.serviceInterest], message: enquiry.message || "Not provided",
      submittedAt: new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short",
      }).format(new Date(submittedAt)) + " IST",
    },
  };
}

export function requireNotificationSent(result: { sent: boolean }) {
  if (!result.sent) throw new Error("Practice notification not sent: recipient suppressed");
}