import { describe, expect, test } from "bun:test";
import { acceptsSubmissionTiming, notificationOptions, PRACTICE_INBOX, requireNotificationSent } from "./consultation-notification.ts";

const enquiry = { name: "Test visitor", contact: "visitor@example.com", preferredContactMethod: "email", sessionPreference: "online", serviceInterest: "individual", message: "Availability enquiry" };

describe("Consultation notification rules", () => {
  test("uses the fixed practice inbox", () => {
    expect(PRACTICE_INBOX).toBe("innerhorizoncare@gmail.com");
  });
  test("replies to the visitor when email is selected", () => {
    expect(notificationOptions(enquiry, "123", "2026-10-22T07:45:00Z").replyTo).toBe("visitor@example.com");
  });
  test("does not use a phone number as reply-to", () => {
    expect(notificationOptions({ ...enquiry, contact: "+919205500670", preferredContactMethod: "phone" }, "123", "2026-10-22T07:45:00Z").replyTo).toBeUndefined();
  });
  test("includes all submitted details and converts submission time to IST", () => {
    expect(notificationOptions(enquiry, "123", "2026-10-22T07:45:00Z").templateData).toEqual({
      name: "Test visitor", contact: "visitor@example.com", preferredContactMethod: "Email", sessionPreference: "Online", serviceInterest: "Individual therapy", message: "Availability enquiry", submittedAt: "22 Oct 2026, 1:15 pm IST",
    });
  });
  test("allows fast and autofilled submissions without a minimum wait", () => {
    expect(acceptsSubmissionTiming("", 0)).toBe(true);
    expect(acceptsSubmissionTiming("", 800)).toBe(true);
  });
  test("still rejects filled honeypots and invalid timers", () => {
    expect(acceptsSubmissionTiming("spam", 5000)).toBe(false);
    expect(acceptsSubmissionTiming("", NaN)).toBe(false);
    expect(acceptsSubmissionTiming("", -1)).toBe(false);
  });
  test("does not report success when delivery is suppressed", () => {
    expect(() => requireNotificationSent({ sent: false })).toThrow();
    expect(() => requireNotificationSent({ sent: true })).not.toThrow();
  });
  test("deduplicates the same submission event", () => {
    expect(notificationOptions(enquiry, "123", "2026-10-22T07:45:00Z").idempotencyKey).toBe("consultation-notification-123");
  });
});