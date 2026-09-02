import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Quote, Brain, Users, ShieldCheck, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-soft-gold/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 order-1">
              <p className="text-healing-sage font-medium tracking-wide uppercase text-sm">
                Trauma-informed, holistic psychotherapy
              </p>
              <h1 className="text-[30px] lg:text-[44px] font-bold text-healing-sage leading-tight">
                Therapy for deeper understanding, lasting change, and more connected relationships
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm Dr. Rajat K. Thukral, a registered clinical psychologist offering trauma-informed,
                holistic therapy for individuals, groups, couples, and families. My integrative approach
                combines evidence based psychotherapy with depth oriented approaches.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg" className="bg-healing-sage hover:bg-deep-forest">
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

            <div className="order-2">
              <img
                src="/dr-rajat-thukral.jpg"
                alt="Dr. Rajat K. Thukral, clinical psychologist"
                width={976}
                height={1220}
                className="aspect-[4/5] w-full max-w-md mx-auto rounded-2xl object-cover object-top shadow-gentle"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-gentle">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-healing-sage mx-auto mb-4" />
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                "Until you make the unconscious conscious, it will direct your life and you will call it fate."
              </blockquote>
              <cite className="text-muted-foreground">— Carl Jung</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[22px] lg:text-[28px] font-bold text-healing-sage mb-4">
              A Space for Healing & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover compassionate, evidence-based therapy tailored to your unique journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <ShieldCheck className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trauma-Informed Care</h3>
                <p className="text-muted-foreground">
                  Gentle, safe approaches that honor your nervous system and healing process
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Integrative Approach</h3>
                <p className="text-muted-foreground">
                  Combining evidence-based therapy with depth psychology and mind-body practices
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-healing-sage mx-auto mb-4" />
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[22px] lg:text-[28px] font-bold text-healing-sage mb-4">
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
      <section className="py-20 bg-gradient-to-r from-healing-sage to-gentle-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[22px] lg:text-[28px] font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards transformation, connection, and deeper understanding
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Schedule Your First Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;