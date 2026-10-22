import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { events, partitionEvents, registrationUrl, type WorkshopEvent } from "@/data/events";

function EventCard({ event }: { event: WorkshopEvent }) {
  return (
    <article className="interactive-card overflow-hidden rounded-lg">
      {event.poster && <img src={event.poster} alt={event.posterAlt} className="h-auto w-full object-contain" loading="lazy" />}
      <div className="space-y-5 p-6">
        {event.limitedSeats && <span className="inline-block rounded-sm bg-sage px-3 py-1 text-sm font-medium text-sage-foreground">Limited seats</span>}
        <div>
          <h3 className="mb-3 text-3xl text-heading">{event.title}</h3>
          <p className="text-foreground">{event.subtitle}</p>
        </div>
        <p className="text-base font-medium">{event.dateLabel} | {event.timeLabel} | {event.venue} | Rs {event.price}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-sage-foreground"><Link to={`/events/${event.slug}`}>View details</Link></Button>
          <Button asChild className="bg-action text-action-foreground hover:bg-action/90"><a href={registrationUrl} target="_blank" rel="noopener noreferrer">Register</a></Button>
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  const { upcoming, past } = partitionEvents(events);
  return (
    <>
      <SEO title="Events & Workshops | Inner Horizon" description="Explore upcoming Inner Horizon workshops and gatherings for healing, reflection and growth, including the online Poetry Release workshop." canonical="https://www.innerhorizon.in/events" />
      <main className="bg-background">
        <div className="site-container page-section">
          <header className="mb-12 max-w-3xl">
            <h1 className="page-title mb-6">Events &amp; Workshops</h1>
            <p className="text-lg">Workshops and gatherings for healing, reflection and growth.</p>
          </header>
          <section aria-labelledby="upcoming-events">
            <h2 id="upcoming-events" className="section-title mb-8">Upcoming</h2>
            <div className="grid gap-8 md:grid-cols-2">{upcoming.map((event) => <EventCard key={event.slug} event={event} />)}</div>
          </section>
          {past.length > 0 && <section className="mt-16" aria-labelledby="past-events"><h2 id="past-events" className="section-title mb-8">Past events</h2><div className="grid gap-8 md:grid-cols-2">{past.map((event) => <EventCard key={event.slug} event={event} />)}</div></section>}
        </div>
      </main>
    </>
  );
}