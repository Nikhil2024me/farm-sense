import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
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

const CTA = () => {
  const { toast } = useToast();
  const [isAddFieldOpen, setIsAddFieldOpen] = useState(false);
  const [fieldName, setFieldName] = useState("");
  const [cropType, setCropType] = useState("");

  const handleAddField = () => {
    if (fieldName && cropType) {
      toast({
        title: "Field Added! 🌾",
        description: `"${fieldName}" with ${cropType} has been created.`,
      });
      setIsAddFieldOpen(false);
      setFieldName("");
      setCropType("");
    }
  };

  const handleBuyKit = () => {
    toast({
      title: "Opening Store 🛒",
      description: "Redirecting to our hardware marketplace...",
    });
    // Scroll to pricing as a demo
    const pricing = document.querySelector("#pricing");
    if (pricing) pricing.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
                <Button variant="hero-outline" size="xl" onClick={() => setIsAddFieldOpen(true)}>
                  Add a Field
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={handleBuyKit}
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

      {/* Add Field Dialog */}
      <Dialog open={isAddFieldOpen} onOpenChange={setIsAddFieldOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Add a New Field</DialogTitle>
            <DialogDescription>
              Enter your field details to start monitoring.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="ctaFieldName">Field Name</Label>
              <Input
                id="ctaFieldName"
                placeholder="e.g., North Valley Plot"
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ctaCropType">Crop Type</Label>
              <Input
                id="ctaCropType"
                placeholder="e.g., Maize, Wheat, Rice"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setIsAddFieldOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleAddField} className="flex-1">
              Add Field
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CTA;
