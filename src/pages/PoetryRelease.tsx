import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { eventStructuredData, poetryRelease as event, registrationUrl } from "@/data/events";

const siteUrl = "https://www.innerhorizon.in";

export default function PoetryRelease() {
  return (
    <>
      <SEO title="Poetry Release - Online Poetry Workshop | Inner Horizon" description={event.body} canonical={`${siteUrl}/events/poetry-release`} />
      <Helmet>
        {event.poster && <meta property="og:image" content={new URL(event.poster, siteUrl).href} />}
        {event.poster && <meta name="twitter:image" content={new URL(event.poster, siteUrl).href} />}
        <script type="application/ld+json">{JSON.stringify(eventStructuredData(event, siteUrl))}</script>
      </Helmet>
      <main className="bg-background">
        <section className="site-container py-10 md:py-20">
          <Link to="/events" className="focus-ring mb-6 inline-block text-sm text-sage underline underline-offset-4">Events &amp; Workshops</Link>
          <div className={event.poster ? "grid items-start gap-10 lg:grid-cols-2" : "max-w-3xl"}>
            <div>
              <h1 className="page-title mb-5">{event.title}</h1>
              <p className="mb-5 text-lg">{event.subtitle}</p>
              <p className="mb-5 text-base font-medium">{event.dateLabel} | {event.timeLabel} | {event.venue} | Rs {event.price}</p>
              <Button asChild size="lg" className="mb-8 w-full bg-action text-action-foreground hover:bg-action/90 sm:w-auto"><a href={registrationUrl} target="_blank" rel="noopener noreferrer">Register now</a></Button>
              <p className="measure text-lg">{event.body}</p>
            </div>
            {event.poster && <img src={event.poster} alt={event.posterAlt} className="h-auto w-full object-contain" />}
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16" aria-label="Workshop details">
          <div className="site-container">
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[['Date', event.dateLabel], ['Time', event.timeLabel], ['Venue', event.venue], ['Fees', `Rs ${event.price}`], ['Availability', 'Limited seats']].map(([label, value]) => <div key={label}><dt className="mb-2 text-sm font-semibold text-sage">{label}</dt><dd className="text-lg">{value}</dd></div>)}
            </dl>
            <p className="mt-8 border-t border-border pt-6 text-base">{event.refundPolicy}</p>
          </div>
        </section>
        <section className="site-container py-12 md:py-16" aria-labelledby="facilitators">
          <h2 id="facilitators" className="section-title mb-8">Facilitated by</h2>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="flex items-center gap-5">
              <img src="/dr-rajat-thukral.jpg" alt="Dr. Rajat K. Thukral" width={976} height={1220} className="aspect-[4/5] w-24 shrink-0 rounded-lg object-cover object-top" loading="lazy" />
              <p className="text-base">Dr. Rajat K. Thukral, Psy. D. (USA), Psychologist, Founder - Inner Horizon</p>
            </div>
            <p className="text-base md:pt-5">Trivarna Hariharan, Poet, Founder - wildflowers_are_prayers</p>
          </div>
        </section>
        <section id="register" className="border-t border-border bg-card py-12 md:py-16" aria-labelledby="register-heading">
          <div className="site-container">
            <h2 id="register-heading" className="section-title mb-5">Register</h2>
            <p className="measure mb-6">Registration is through a Google Form and needs a Google sign-in. You will be asked to upload a payment screenshot.</p>
            <Button asChild size="lg" className="mb-8 w-full bg-action text-action-foreground hover:bg-action/90 sm:w-auto"><a href={registrationUrl} target="_blank" rel="noopener noreferrer">Register now</a></Button>
            <iframe src={`${registrationUrl}?embedded=true`} title="Poetry Release registration form" width="100%" height="1400" className="w-full border-0" loading="lazy" />
            <p className="mt-5">Form not loading? <a className="focus-ring text-sage underline underline-offset-4" href={registrationUrl} target="_blank" rel="noopener noreferrer">Open it here</a></p>
            <p className="mt-8">Queries: WhatsApp <a className="focus-ring whitespace-nowrap text-sage underline underline-offset-4" href="https://wa.me/919205500670" target="_blank" rel="noopener noreferrer">92055 00670</a> or email <a className="focus-ring break-all text-sage underline underline-offset-4" href="mailto:innerhorizoncare@gmail.com">innerhorizoncare@gmail.com</a></p>
          </div>
        </section>
      </main>
    </>
  );
}