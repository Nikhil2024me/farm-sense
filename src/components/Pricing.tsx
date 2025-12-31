import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small farms getting started",
    price: "$19",
    period: "/month",
    features: [
      "1 field monitoring",
      "2 sensor nodes",
      "Daily weather forecasts",
      "SMS alerts (50/month)",
      "7-day data history",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing operations that need more",
    price: "$49",
    period: "/month",
    features: [
      "Up to 5 fields",
      "10 sensor nodes",
      "Hourly forecasts + radar",
      "Unlimited SMS & push alerts",
      "1-year data history",
      "Irrigation automation",
      "Pest risk predictions",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large farms and cooperatives",
    price: "Custom",
    period: "",
    features: [
      "Unlimited fields",
      "Unlimited nodes",
      "Satellite NDVI overlays",
      "API access",
      "5-year data retention",
      "Custom integrations",
      "Market price feeds",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handlePlanClick = (planName: string, cta: string) => {
    if (cta === "Contact Sales") {
      toast({
        title: "Enterprise Inquiry",
        description: "Our sales team will reach out within 24 hours!",
      });
      return;
    }
    setSelectedPlan(planName);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (email) {
      toast({
        title: "You're all set! 🎉",
        description: `Trial started for ${selectedPlan} plan. Check ${email} for confirmation.`,
      });
      setIsDialogOpen(false);
      setEmail("");
    }
  };

  return (
    <>
      <section id="pricing" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Simple Pricing</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Plans that grow with you
            </h2>
            <p className="text-lg text-muted-foreground">
              Start small, scale as you grow. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-elevated p-6 lg:p-8 relative ${
                  plan.popular ? "border-2 border-primary glow-primary" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-leaf/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-leaf" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => handlePlanClick(plan.name, plan.cta)}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Hardware Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Need hardware? Our <span className="text-foreground font-medium">Starter Kit</span> includes 
              ESP32 nodes, sensors, and solar power starting at $89.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Start Your Free Trial</DialogTitle>
            <DialogDescription>
              Get 14 days free on the {selectedPlan} plan. No credit card required.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="farmer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="flex-1">
              Start Trial
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Pricing;
