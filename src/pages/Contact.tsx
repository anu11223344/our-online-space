import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Office Location",
      value: "Greater Kailash-II, New Delhi",
      description: "In-person sessions available"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9873693227",
      description: "Text or call for appointments"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rajat4hope@gmail.com",
      description: "Preferred for initial contact"
    },
    {
      icon: Clock,
      label: "Session Format",
      value: "In-person & Online",
      description: "Flexible scheduling available"
    }
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "Reach Out",
      description: "Contact via email or text message to express your interest in therapy."
    },
    {
      step: 2,
      title: "Complete Intake Form",
      description: "Fill out the psychotherapy intake form to help me understand your needs."
    },
    {
      step: 3,
      title: "Schedule Session",
      description: "Choose your preferred session mode (in-person or online) and available time."
    },
    {
      step: 4,
      title: "Begin Your Journey",
      description: "Start your personalized therapy journey in a safe, welcoming space."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            📞 Contact & Booking
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's Connect — Your healing journey starts here.
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-none shadow-gentle text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-healing-sage mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                    <p className="text-foreground font-medium mb-1">{info.value}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Booking Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Booking Steps
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {bookingSteps.map((step) => (
                <Card key={step.step} className="border-none shadow-gentle">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-healing-sage text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pl-14">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Intake Form */}
        <section className="mb-16">
          <Card className="border-none shadow-gentle bg-muted/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Begin?
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete the psychotherapy intake form to help me understand your needs 
                and prepare for our first session together.
              </p>
              <Button asChild size="lg" className="bg-healing-sage hover:bg-deep-forest">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfVD16i9MIVHwBOlshlIULX4LiKCQKLCy236KHiLSeXNDFLDg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Complete Intake Form
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-healing-sage" />
                  Email Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Preferred method for initial contact. Please include:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Brief description of what brings you to therapy</li>
                  <li>• Your preferred session format (in-person/online)</li>
                  <li>• Any scheduling preferences or time constraints</li>
                </ul>
                <Button asChild className="mt-4 bg-healing-sage hover:bg-deep-forest">
                  <a href="mailto:rajat4hope@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-healing-sage" />
                  Phone Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For urgent scheduling or quick questions:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Text message preferred for initial contact</li>
                  <li>• Please include your name and reason for reaching out</li>
                  <li>• Response typically within 24-48 hours</li>
                </ul>
                <Button asChild className="mt-4 bg-healing-sage hover:bg-deep-forest">
                  <a href="tel:9873693227">Call or Text</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="border-none shadow-gentle bg-gradient-to-r from-healing-sage to-gentle-blue text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Healing Journey Awaits
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Taking the first step toward therapy is an act of courage and self-compassion. 
                I'm here to support you on this important journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <a href="mailto:rajat4hope@gmail.com">Email Me Today</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:9873693227">Call or Text</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;