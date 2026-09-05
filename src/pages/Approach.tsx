import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Brain, Shield, Users, Lightbulb, Compass, Sparkles, Activity, HeartPulse, Network, Leaf } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Shield,
      title: "Trauma-Informed & Polyvagal-Informed Care",
      description: "Focused on restoring safety through body awareness and nervous system regulation."
    },
    {
      icon: Users,
      title: "Internal Family Systems (IFS) Informed Therapy",
      description: "Working compassionately with your inner \"parts\" — protector, critic, wounded child, and more."
    },
    {
      icon: Brain,
      title: "Psychodynamic Psychotherapy",
      description: "Exploring unconscious beliefs, internalized relationships, and life histories shaping your experience."
    },
    {
      icon: Lightbulb,
      title: "Cognitive and Dialectical Behaviour Therapy",
      description: "Structured goal oriented approach to become more aware of thoughts, manage intense emotions, and make meaningful behavioural changes."
    },
    {
      icon: Sparkles,
      title: "Jungian & Archetypal Psychology",
      description: "Using dreams, symbols, and astrology to reveal deeper meaning and insight."
    },
    {
      icon: Activity,
      title: "Mind–Body Integration & Functional Health",
      description: "Understanding how sleep, hormones, gut health, and lifestyle influence emotional wellbeing."
    },
    {
      icon: Compass,
      title: "Culturally Sensitive & Inclusive Therapy",
      description: "Respectful incorporation of your cultural background, values, and identity intersections."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="site-container page-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-title mb-6">
            Therapy Approach
          </h1>
          <div className="measure mx-auto space-y-6 text-lg text-foreground/80">
            <p>
              I believe therapy is a nurturing, non-judgmental space where you can explore, reflect, 
              and work at your own pace. Therapy can move beyond symptom relief toward meaning-making and self-compassion.
            </p>
            <p>
              I work from a bio-psycho-social-spiritual model of care — meaning therapy with me honours 
              the full range of your human experience:
            </p>
          </div>
        </div>

        {/* Bio-Psycho-Social-Spiritual Model */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="interactive-card text-center" tabIndex={0}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Biological</h3>
                <p className="text-muted-foreground text-sm">
                  Nervous system, sleep, diet, and physical health
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card text-center" tabIndex={0}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Psychological</h3>
                <p className="text-muted-foreground text-sm">
                  Thoughts, emotions, and inner narratives
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card text-center" tabIndex={0}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Social</h3>
                <p className="text-muted-foreground text-sm">
                  Family, community, and cultural identity
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card text-center" tabIndex={0}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Spiritual</h3>
                <p className="text-muted-foreground text-sm">
                  Values, purpose, meaning, and intuition
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Approaches */}
        <section className="mb-16">
          <h2 className="section-title mb-8 text-center">Core Approaches</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                 <Card key={index} className="interactive-card" tabIndex={0}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                         {IconComponent && <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />}
                      </div>
                      <CardTitle className="text-lg leading-tight">{approach.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pl-16">
                     <p className="text-foreground/75">{approach.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quote */}
        <section className="py-16">
          <Card className="mx-auto max-w-4xl border border-border bg-muted shadow-none">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-healing-sage mx-auto mb-4" />
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                "All parts are welcome."
              </blockquote>
              <cite className="text-muted-foreground">— Richard Schwartz</cite>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Approach;