import { describe, expect, test } from "bun:test";
import { eventStructuredData, isFullRefundEligible, partitionEvents, poetryRelease } from "./events";

describe("Poetry Release rules", () => {
  test("costs Rs 1800 in INR", () => {
    const schema = eventStructuredData(poetryRelease, "https://our-online-space.lovable.app");
    expect(schema.offers.price).toBe(1800);
    expect(schema.offers.priceCurrency).toBe("INR");
  });
  test("runs on 1 November 2026 from 3 to 5 pm IST", () => {
    expect(new Date(poetryRelease.startDate).toISOString()).toBe("2026-11-01T09:30:00.000Z");
    expect(new Date(poetryRelease.endDate).toISOString()).toBe("2026-11-01T11:30:00.000Z");
  });
  test("allows a full refund through exactly 48 hours before the workshop", () => {
    expect(isFullRefundEligible(poetryRelease, new Date("2026-10-30T15:00:00+05:30"))).toBe(true);
    expect(isFullRefundEligible(poetryRelease, new Date("2026-10-30T15:00:01+05:30"))).toBe(false);
  });
  test("moves events to past only after their end time", () => {
    expect(partitionEvents([poetryRelease], new Date("2026-11-01T17:00:00+05:30")).past).toHaveLength(0);
    expect(partitionEvents([poetryRelease], new Date("2026-11-01T17:00:01+05:30")).past).toHaveLength(1);
  });
});