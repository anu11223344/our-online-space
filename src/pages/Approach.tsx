import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Brain, Shield, Users, Lightbulb, Compass, Sparkles } from "lucide-react";
import treeIcon from "@/assets/tree-icon.png";

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
      icon: null,
      isImage: true,
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[32px] lg:text-[44px] font-bold text-healing-sage mb-6">
            Therapy Approach
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              I believe therapy is a nurturing, non-judgmental space where you can explore, reflect, 
              and heal at your own pace. Therapy is more than symptom relief — it's about transformation, 
              meaning-making, and self-compassion.
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
            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Biological</h3>
                <p className="text-muted-foreground text-sm">
                  Nervous system, sleep, diet, and physical health
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Psychological</h3>
                <p className="text-muted-foreground text-sm">
                  Thoughts, emotions, and inner narratives
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Social</h3>
                <p className="text-muted-foreground text-sm">
                  Family, community, and cultural identity
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
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
          <h2 className="text-[26px] font-bold text-healing-sage mb-8 text-center">Core Approaches</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-healing-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {approach.isImage ? (
                          <img src={treeIcon} alt="Tree icon" className="h-6 w-6" />
                        ) : (
                          IconComponent && <IconComponent className="h-6 w-6 text-healing-sage" />
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">{approach.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pl-16">
                    <p className="text-muted-foreground">{approach.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quote */}
        <section className="py-16">
          <Card className="max-w-4xl mx-auto border-none shadow-gentle bg-muted/30">
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
    </div>
  );
};

export default Approach;