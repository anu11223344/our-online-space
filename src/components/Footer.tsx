import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-forest font-sans text-primary-foreground">
      <div className="site-container py-14">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/inner-horizon-lockup.png" alt="Inner Horizon Mental Wellness" width={630} height={160} className="h-12 w-auto object-contain shrink-0 brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Inner Horizon | Mental Health Services
            </p>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              Thoughtful support for mind, body, relationships, and emotional wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/70 hover:text-soft-gold transition-colors text-sm">
                About
              </Link>
              <Link to="/approach" className="block text-primary-foreground/70 hover:text-soft-gold transition-colors text-sm">
                Therapy Approach
              </Link>
              <Link to="/services" className="block text-primary-foreground/70 hover:text-soft-gold transition-colors text-sm">
                Services
              </Link>
              <Link to="/contact" className="block text-primary-foreground/70 hover:text-soft-gold transition-colors text-sm">
                Contact
              </Link>
              <Link to="/contact" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
                Book a consultation
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>Greater Kailash-II, New Delhi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+919205500670" className="hover:text-soft-gold transition-colors">+91 92055 00670</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:innerhorizoncare@gmail.com" className="hover:text-soft-gold transition-colors">innerhorizoncare@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="mb-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/privacy" className="focus-ring text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link>
          <Link to="/terms" className="focus-ring text-primary-foreground/80 hover:text-primary-foreground">Terms</Link>
          <Link to="/accessibility" className="focus-ring text-primary-foreground/80 hover:text-primary-foreground">Accessibility</Link>
          <Link to="/crisis-support" className="focus-ring text-primary-foreground/80 hover:text-primary-foreground">Crisis Support</Link>
        </div>

        <div className="mb-7 border-l-2 border-soft-gold pl-4 text-sm text-primary-foreground/85">
          <strong className="text-primary-foreground">Need urgent help?</strong> Inner Horizon is not a crisis service. Contact local emergency services or view <Link className="underline underline-offset-4" to="/crisis-support">crisis support</Link>.
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Inner Horizon | Mental Health Services | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;