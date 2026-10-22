
export const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJlLH_E9LgyGumCIoBq8xeP4ZSh8UZN1ZIJju_utrtC21aBA/viewform";

export type WorkshopEvent = {
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  price: number;
  currency: string;
  limitedSeats: boolean;
  poster?: string;
  posterAlt: string;
  refundHours: number;
  refundPolicy: string;
};

export const events: WorkshopEvent[] = [
  {
    slug: "poetry-release",
    title: "Poetry Release",
    subtitle: "An online workshop on poetry as a therapeutic tool and self-care practice",
    body: "You don't need to be a poet or a writer. You need a page, a pen, and a little permission. Join us for an afternoon of writing, reflection, and gentle release.",
    startDate: "2026-11-01T15:00+05:30",
    endDate: "2026-11-01T17:00+05:30",
    dateLabel: "1st November",
    timeLabel: "3-5 pm",
    venue: "Online",
    price: 1800,
    currency: "INR",
    limitedSeats: true,
    poster: "/poetry-release-poster.jpg",
    posterAlt: "Poetry Release online workshop poster",
    refundHours: 48,
    refundPolicy: "Full refund up to 48 hours before the workshop. No refund afterwards.",
  },
];

export const poetryRelease = events[0];

export function partitionEvents(items: WorkshopEvent[], now = new Date()) {
  return {
    upcoming: items.filter((event) => new Date(event.endDate).getTime() >= now.getTime()),
    past: items.filter((event) => new Date(event.endDate).getTime() < now.getTime()),
  };
}

export function isFullRefundEligible(event: WorkshopEvent, requestedAt: Date) {
  return requestedAt.getTime() <= new Date(event.startDate).getTime() - event.refundHours * 60 * 60 * 1000;
}

export function eventStructuredData(event: WorkshopEvent, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.body,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: `${siteUrl}/events/${event.slug}`,
    ...(event.poster ? { image: new URL(event.poster, siteUrl).href } : {}),
    location: { "@type": "VirtualLocation", url: registrationUrl },
    organizer: { "@type": "Organization", name: "Inner Horizon", url: siteUrl },
    offers: { "@type": "Offer", price: event.price, priceCurrency: event.currency, url: registrationUrl, availability: "https://schema.org/LimitedAvailability" },
  };
}