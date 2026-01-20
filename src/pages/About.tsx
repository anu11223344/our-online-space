import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, GraduationCap, Award, Globe, Rainbow } from "lucide-react";

import treeIcon from "@/assets/tree-icon.png";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Dr. Rajat K. Thukral
          </h1>
          <p className="text-xl text-muted-foreground">
            I am an RCI-registered clinical psychologist with more than 20 years of experience 
            in supporting adults, couples, and families across India and the U.S. My work focuses 
            on helping people find clarity, connection, and a deeper sense of meaning.
          </p>
        </div>

        {/* Training Background */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-healing-sage" />
            <h2 className="text-3xl font-bold text-foreground">My Training Background</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-gentle">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Psy.D. in Clinical Psychology</h3>
                    <p className="text-muted-foreground">California Institute of Integral Studies, San Francisco, USA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Predoctoral Internship (APA accredited)</h3>
                    <p className="text-muted-foreground">Miami University Counseling Center, Ohio, USA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Postdoctoral Fellowship</h3>
                    <p className="text-muted-foreground">Miami University Counseling Center, Ohio, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">MA in Applied Clinical Psychology</h3>
                    <p className="text-muted-foreground">Pennsylvania State University, USA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">MA in Applied Psychology</h3>
                    <p className="text-muted-foreground">University of Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Clinical Journey */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-healing-sage" />
            <h2 className="text-3xl font-bold text-foreground">My Clinical Journey</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-gentle">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Clinical Experience</h3>
                <p className="text-muted-foreground">
                  Gained extensive clinical experience in the U.S. and India — from university counselling 
                  centres to private practice — grounded in both western scientific models and the cultural 
                  depth of Indian therapeutic needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Training & Workshops</h3>
                <p className="text-muted-foreground">
                  Trainer & workshop facilitator specializing in mindfulness, resilience, LGBTQIA+ inclusion, 
                  stress management in corporate, NGO, and academic settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Supervision & Mentorship</h3>
                <p className="text-muted-foreground">
                  Supervisor and mentor to graduate trainees, early-career therapists, and interns, 
                  supporting culturally sensitive, ethical professional growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commitment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">My Commitment</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">🌍 Culturally Attuned Therapy</h3>
                <p className="text-muted-foreground text-sm">
                  Honoring your cultural background and identity in every session
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <Rainbow className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">🌈 LGBTQIA+ Affirmative Space</h3>
                <p className="text-muted-foreground text-sm">
                  Creating safe, inclusive environments for all identities
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle text-center">
              <CardContent className="p-6">
                <img src={treeIcon} alt="Tree icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">🌱 Holistic Care</h3>
                <p className="text-muted-foreground text-sm">
                  Addressing mind, body, and spirit in your healing journey
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16">
          <Card className="max-w-4xl mx-auto border-none shadow-gentle bg-muted/30">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-healing-sage mx-auto mb-4" />
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                "The privilege of a lifetime is to become who you truly are."
              </blockquote>
              <cite className="text-muted-foreground">— Carl Jung</cite>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;