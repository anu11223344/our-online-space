import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Quote, Brain, Users, ShieldCheck, Instagram, Linkedin } from "lucide-react";
import treeIcon from "@/assets/tree-icon.png";
import homeHeroPhoto from "@/assets/home-hero-photo-3.jpg";


const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-soft-gold/10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-healing-sage font-medium text-lg">
                  Healing mind, body, spirit, and relationships— with compassion and depth.
                </p>
                <h1 className="text-[28px] lg:text-[40px] font-bold text-healing-sage leading-tight">
                  Dr. Rajat K. Thukral
                </h1>
                <p className="text-xl text-muted-foreground">
                  Clinical Psychologist | Marriage & Family Therapist
                </p>
              </div>
              
              <div className="prose text-muted-foreground max-w-none">
                <p>
                  I'm Dr. Rajat K. Thukral, a registered clinical psychologist offering trauma-informed, 
                  holistic therapy for individuals, groups, couples, and families. My integrative approach 
                  combines evidence based psychotherapy with depth oriented approaches.
                </p>
                <p>
                  Whether you're feeling overwhelmed by life's demands, stuck in repeating patterns, 
                  or simply seeking deeper understanding and connection, therapy can be a space of 
                  profound transformation and healing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-healing-sage hover:bg-deep-forest">
                  <Link to="/contact">Book a Session</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={homeHeroPhoto} 
                alt="Therapist portrait"
                className="rounded-2xl shadow-gentle w-full max-w-md mx-auto object-cover"
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
              href="https://www.instagram.com/rajatkthukral_psyd?igsh=bnhtcmU2djAyNjgw" 
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