import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-soft-gold/10 px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        <img
          src="/inner-horizon-icon.png"
          alt="Inner Horizon"
          width={489}
          height={484}
          className="h-20 w-auto mx-auto mb-6"
        />
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Page not found</p>
        <h1 className="text-[28px] lg:text-[40px] font-bold text-healing-sage mb-4">
          This path doesn't exist
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for may have moved. Let's get you back to a safe starting point.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-healing-sage hover:bg-deep-forest">
            <Link to="/contact">Book a consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
