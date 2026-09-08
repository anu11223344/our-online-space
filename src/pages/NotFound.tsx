import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Inner Horizon"
        description="The page you are looking for does not exist. Return home or book a consultation with Inner Horizon."
        canonical="https://www.innerhorizon.in/404"
      />
      <main className="flex min-h-[70vh] items-center justify-center bg-muted px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        <img
          src="/inner-horizon-icon.png"
          alt="Inner Horizon"
          width={489}
          height={484}
          className="h-20 w-auto mx-auto mb-6"
        />
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Page not found</p>
        <h1 className="page-title mb-4">
          This path doesn't exist
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for may have moved. Let's get you back to a safe starting point.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Book a consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
