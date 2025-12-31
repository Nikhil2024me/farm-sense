import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Content */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Start farming smarter today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers using Weather v0 to save water, reduce losses, 
              and increase yields. Set up your first field in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="xl">
                Add a Field
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Buy Starter Kit
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-12 text-primary-foreground/60 text-sm">
              <span>✓ 14-day free trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
