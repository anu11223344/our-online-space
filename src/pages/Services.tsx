import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { User, Users, Star, UserCheck, BookOpen, Users2, HandHeart } from "lucide-react";

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
    <main className="min-h-screen bg-background">
      <div className="site-container page-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-title mb-6">Services</h1>
          <p className="measure mx-auto text-lg text-foreground/80">
            Therapy and consultation for individuals, couples, families, and groups, offered online and in person.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
               <Card key={index} className="interactive-card" tabIndex={0}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                      <IconComponent className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-foreground/75">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 ml-16">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-foreground/75">
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
          <Card className="border border-border bg-muted shadow-none">
            <CardContent className="p-8">
              <h2 className="section-title-sm mb-6 text-center">
                Session Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-3 text-lg">Location</h3>
                  <p className="mb-4 text-foreground/75">
                    Sessions are offered both in-person in South Delhi (Greater Kailash-II) 
                    and online for your convenience.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg text-primary">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-healing-sage/10">
                      <HandHeart className="h-4 w-4" aria-hidden="true" />
                    </span>
                    Format
                  </h3>
                  <p className="mb-4 text-foreground/75">
                    Choose from individual sessions, couple/family sessions, or group therapy 
                    based on your needs and preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="bg-primary px-6 py-12 text-center text-primary-foreground">
          <h2 className="section-title mb-4 text-primary-foreground">Arrange a first conversation</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">Ask about availability, fees, and whether a particular service may be a suitable fit.</p>
          <Button asChild size="lg" variant="secondary"><Link to="/contact">Book a consultation</Link></Button>
        </section>
      </div>
    </main>
  );
};

export default Services;