import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-[32px] lg:text-[44px] font-bold text-healing-sage mb-6">
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
          <h2 className="text-[26px] font-bold text-healing-sage mb-8 text-center">My Training Background</h2>
          
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
          <h2 className="text-[26px] font-bold text-healing-sage mb-8 text-center">My Clinical Journey</h2>

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