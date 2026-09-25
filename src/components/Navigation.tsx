import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/approach", label: "Approach" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-sage-border bg-sage font-sans" aria-label="Main navigation">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Inner Horizon — home"
            className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src="/inner-horizon-lockup.png"
              alt="Inner Horizon Mental Wellness"
              width={630}
              height={160}
              className="h-[34px] md:h-10 w-auto object-contain shrink-0"
            />
            <span className="ml-2 whitespace-nowrap font-display text-lg text-sage-foreground md:text-xl">
              Inner Horizon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? "page" : undefined}
                className="focus-ring whitespace-nowrap text-sm font-medium text-sage-foreground transition-colors hover:text-sage-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="whitespace-nowrap bg-sage-foreground text-sage hover:bg-sage-foreground/90 hover:text-sage">
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sage-foreground hover:bg-sage-border hover:text-sage-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="border-t border-sage-border bg-sage py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                   className="focus-ring py-2 text-sm font-medium text-sage-foreground transition-colors hover:text-sage-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
               <Button asChild className="mt-4 w-full bg-sage-foreground text-sage hover:bg-sage-foreground/90 hover:text-sage">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book a consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
