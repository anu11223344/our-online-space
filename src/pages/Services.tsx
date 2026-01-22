import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, Star, UserCheck, BookOpen, Users2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description: "Support for anxiety, depression, trauma, grief, burnout, life transitions, relationship stress, work stress, addictions, and identity exploration.",
      features: [
        "Trauma-informed approach",
        "Holistic mind-body integration",
        "Culturally sensitive care",
        "LGBTQIA+ affirmative space"
      ]
    },
    {
      icon: Users,
      title: "Couple & Family Therapy",
      description: "Helping couples and families rebuild connection, heal conflict, and grow together.",
      features: [
        "Relationship repair and strengthening",
        "Communication skills development",
        "Conflict resolution",
        "Family dynamics exploration"
      ]
    },
    {
      icon: Star,
      title: "Jungian Psychological–Astrology Consultations",
      description: "Therapeutic use of astrology as symbolic insight (not prediction):",
      features: [
        "Individuals: uncover archetypes, shadow patterns, and life cycles",
        "Couples: explore relational themes with synastry and composite charts",
        "Deep symbolic exploration",
        "Archetypal understanding"
      ]
    },
    {
      icon: Users2,
      title: "Group Therapy",
      description: "Structured DBT groups to unstructured anxiety, trauma, and grief support groups.",
      features: [
        "Peer support and connection",
        "Shared healing experiences",
        "Skill-building in community",
        "Cost-effective therapy option"
      ]
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description: "Customized programs for schools, NGOs, universities, corporates.",
      features: [
        "Mindfulness and stress management",
        "LGBTQIA+ inclusion training",
        "Resilience building",
        "Mental health awareness"
      ]
    },
    {
      icon: UserCheck,
      title: "Training & Supervision",
      description: "Mentoring early career therapist and Psychology students.",
      features: [
        "Clinical supervision",
        "Professional development",
        "Ethical practice guidance",
        "Culturally sensitive training"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-healing-sage mb-6">
            🌱 Services Offered
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive therapeutic services designed to support your unique journey 
            of healing, growth, and transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-healing-sage" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 ml-16">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-healing-sage rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Session Information */}
        <section className="mb-16">
          <Card className="border-none shadow-gentle bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-healing-sage mb-6 text-center">
                Session Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">📍 Location</h3>
                  <p className="text-muted-foreground mb-4">
                    Sessions are offered both in-person in South Delhi (Greater Kailash-II) 
                    and online for your convenience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">💻 Format</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose from individual sessions, couple/family sessions, or group therapy 
                    based on your needs and preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-none shadow-gentle bg-gradient-to-r from-healing-sage to-gentle-blue text-primary-foreground">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Healing Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Every journey begins with a single step. Let's take that step together.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Book Your First Session</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;