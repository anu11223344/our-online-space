import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Brain, CalendarClock, Clock3, IndianRupee, LockKeyhole, MessageCircle, ShieldCheck, Users, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="overflow-hidden bg-background">
        <div className="site-container py-14 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 order-1">
              <p className="text-healing-sage font-medium tracking-wide uppercase text-sm">
                Trauma-informed, holistic psychotherapy
              </p>
               <h1 className="page-title">
                Therapy for deeper understanding, lasting change, and more connected relationships
              </h1>
              <p className="measure text-lg text-foreground/80">
                I'm Dr. Rajat K. Thukral, a registered clinical psychologist offering trauma-informed,
                holistic therapy for individuals, groups, couples, and families. My integrative approach
                combines evidence-based psychotherapy with depth-oriented approaches.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg">
                  <Link to="/contact">Book a consultation</Link>
                </Button>
                <Link
                  to="/services"
                  className="text-healing-sage underline underline-offset-4 hover:text-deep-forest transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Explore services
                </Link>
              </div>
            </div>

             <div className="order-2 mx-auto w-full max-w-md">
              <img
                src="/dr-rajat-thukral.jpg"
                alt="Dr. Rajat K. Thukral, clinical psychologist"
                width={976}
                height={1220}
                 className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-gentle"
              />
               <div className="mt-5 border-l-2 border-primary pl-4 text-sm leading-relaxed text-foreground/80">
                 <p className="font-semibold text-foreground">Dr. Rajat K. Thukral</p>
                 <p>Registered Clinical Psychologist</p>
                 <p>RCI Registration No. A55242</p>
               </div>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section bg-muted">
        <div className="site-container">
          <div className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase text-primary">Practical information</p><h2 className="section-title">What you can expect</h2></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Clock3, text: "Sessions run 50 minutes, available online and in person." },
              { icon: MessageCircle, text: "The first conversation is about fit, with no obligation to continue." },
              { icon: IndianRupee, text: "Fees are shared directly on enquiry." },
              { icon: CalendarClock, text: "Cancellations need 24 hours' notice or the session is charged in full." },
              { icon: LockKeyhole, text: "Everything discussed stays confidential, with the standard clinical exceptions around risk to safety." },
            ].map(({ icon: Icon, text }) => (
              <Card className="interactive-card" key={text} tabIndex={0}><CardContent className="p-6"><Icon className="mb-4 h-6 w-6 text-primary" aria-hidden="true"/><p className="text-[15px] leading-relaxed text-foreground/80">{text}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="page-section bg-card">
        <div className="site-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              A thoughtful, integrative approach
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/75">
              Compassionate, evidence-based care responsive to your needs and context.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="interactive-card" tabIndex={0}>
              <CardContent className="p-6 text-center">
                <ShieldCheck className="h-9 w-9 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trauma-Informed Care</h3>
                <p className="text-muted-foreground">
                  Gentle approaches that honour your nervous system and pace.
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card" tabIndex={0}>
              <CardContent className="p-6 text-center">
                <Brain className="h-9 w-9 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Integrative Approach</h3>
                <p className="text-muted-foreground">
                  Combining evidence-based therapy with depth psychology and mind-body practices
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card" tabIndex={0}>
              <CardContent className="p-6 text-center">
                <Users className="h-9 w-9 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Culturally Sensitive</h3>
                <p className="text-muted-foreground">
                  LGBTQIA+ affirmative space with deep respect for your cultural identity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Follow Me Section */}
      <section className="page-section bg-muted">
        <div className="site-container text-center">
          <h2 className="section-title mb-4">
            Follow Me
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Stay connected and join the conversation on mental health and wellness
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.instagram.com/innerhorizon.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-healing-sage hover:text-deep-forest transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dr-rajat-kaur-thukral-55ab1510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-healing-sage hover:text-deep-forest transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-section bg-primary text-primary-foreground">
        <div className="site-container text-center">
          <h2 className="section-title mb-6 text-primary-foreground">
            Ready to talk?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reach out to arrange an initial conversation and consider whether working together feels right.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Book a consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;