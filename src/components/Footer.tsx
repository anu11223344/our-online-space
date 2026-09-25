import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage font-sans text-sage-foreground">
      <div className="site-container py-14">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/inner-horizon-lockup.png" alt="Inner Horizon Mental Well-Being" width={1425} height={511} className="h-16 w-auto shrink-0 object-contain" />
            </div>
            <p className="mb-4 max-w-md text-sage-foreground">
              Inner Horizon | Mental Health Services
            </p>
            <p className="max-w-md text-sm text-sage-foreground">
              Thoughtful support for mind, body, relationships - with emotional wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-sage-foreground transition-colors hover:text-sage-foreground">
                About
              </Link>
              <Link to="/approach" className="block text-sm text-sage-foreground transition-colors hover:text-sage-foreground">
                Therapy Approach
              </Link>
              <Link to="/services" className="block text-sm text-sage-foreground transition-colors hover:text-sage-foreground">
                Services
              </Link>
              <Link to="/contact" className="block text-sm text-sage-foreground transition-colors hover:text-sage-foreground">
                Contact
              </Link>
              <Link to="/contact" className="block text-sm font-medium text-sage-foreground transition-colors hover:text-sage-foreground">
                Book a consultation
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-sage-foreground">
                <MapPin className="h-4 w-4" />
                <span>Greater Kailash-II, New Delhi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-sage-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+919205500670" className="text-sage-foreground transition-colors hover:text-sage-foreground">+91 92055 00670</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-sage-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:innerhorizoncare@gmail.com" className="break-all text-sage-foreground transition-colors hover:text-sage-foreground">innerhorizoncare@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-sage-foreground/30" />

        <div className="mb-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/privacy" className="focus-ring text-sage-foreground hover:text-sage-foreground">Privacy Policy</Link>
          <Link to="/terms" className="focus-ring text-sage-foreground hover:text-sage-foreground">Terms</Link>
          <Link to="/accessibility" className="focus-ring text-sage-foreground hover:text-sage-foreground">Accessibility</Link>
          <Link to="/crisis-support" className="focus-ring text-sage-foreground hover:text-sage-foreground">Crisis Support</Link>
        </div>

        <div className="mb-7 border-l-2 border-soft-gold pl-4 text-sm text-sage-foreground">
          <strong className="text-sage-foreground">Need urgent help?</strong> Inner Horizon is not a crisis service. Contact local emergency services or view <Link className="text-sage-foreground underline underline-offset-4" to="/crisis-support">crisis support</Link>.
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-sage-foreground">
          <p>© {new Date().getFullYear()} Inner Horizon | Mental Health Services | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;