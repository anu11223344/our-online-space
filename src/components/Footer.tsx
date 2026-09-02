import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-healing-sage text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
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
              Healing mind, body, spirit, and relationships— with compassion and depth.
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

        {/* Crisis Disclaimer */}
        <div className="bg-primary-foreground/10 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-soft-gold mb-3">Crisis Disclaimer</h4>
          <p className="text-sm text-primary-foreground/80 mb-4">
            This website offers supportive therapeutic services and is not a substitute for emergency care. 
            If you are in crisis, please contact your local emergency services or a helpline.
          </p>
          <div className="text-sm text-primary-foreground/70">
            <p className="font-medium text-primary-foreground/90 mb-2">India-Based Mental Health Helplines:</p>
            <ul className="space-y-1">
              <li>• AASRA (24/7): 91-9820466726 | 91-22-27546669</li>
              <li>• iCall (TISS): +91 9152987821 (Mon–Sat, 10 AM–8 PM)</li>
              <li>• Vandrevala Foundation: 1860 266 2345 | 9999 666 555</li>
            </ul>
            <p className="mt-2">If outside India, please contact your local emergency or crisis services.</p>
          </div>
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