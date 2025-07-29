import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What happens in the first session?",
      answer: "A gentle, exploratory session to understand your needs and goals. There's no pressure to share everything immediately — we move at your pace."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, all information is confidential except in legally required situations related to safety."
    },
    {
      question: "How long does therapy take?",
      answer: "Varies by individual. Some prefer short-term; others may engage in longer-term growth work. We will discuss your goals together."
    },
    {
      question: "Do you offer online therapy?",
      answer: "Yes. Sessions are offered both in-person in South Delhi and online."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "If you feel stuck, overwhelmed, or are curious about your inner world and wellbeing, therapy can provide support, insight, and practical tools."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ❓ Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your Questions Matter
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <HelpCircle className="h-6 w-6 text-healing-sage flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-12">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-gentle bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  More Questions?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have specific questions about therapy, my approach, or how I can support 
                  your unique situation, please don't hesitate to reach out. I'm here to provide 
                  clarity and help you feel comfortable about taking this important step.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every person's journey is different, and I'm committed to creating a space where 
                  you feel heard, understood, and supported from the very first contact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">🌱 Your Pace</h3>
                  <p className="text-muted-foreground text-sm">
                    Therapy moves at a pace that feels safe and comfortable for you. 
                    There's no rush or pressure to share more than you're ready to.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">🤝 Collaborative Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    We work together as partners in your healing journey. Your insights 
                    and experiences are valued and central to our work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">🏠 Safe Space</h3>
                  <p className="text-muted-foreground text-sm">
                    A non-judgmental environment where all parts of your experience 
                    are welcome and honored.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">🎯 Goal-Oriented</h3>
                  <p className="text-muted-foreground text-sm">
                    While respecting your process, we'll work together to identify 
                    and move toward your therapeutic goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-none shadow-gentle bg-gradient-to-r from-healing-sage to-gentle-blue text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                I'm here to address any concerns and help you feel confident about starting therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Learn More About Dr. Thukral</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;