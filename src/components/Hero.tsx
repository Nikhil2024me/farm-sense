import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Droplets, Thermometer, Wind } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-leaf-light/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
              <span className="text-sm font-medium text-primary">Smart farming starts here</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Local weather, soil & crop insights for{" "}
              <span className="text-primary">every farmer</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up delay-100">
              Real-time local weather + soil sensors + crop alerts — actionable guidance so farmers can irrigate smarter, reduce losses and improve yield.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-200">
              <Button variant="hero" size="xl">
                Add a Field
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                See Demo Dashboard
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up delay-300">
              <div className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold text-foreground">30%</div>
                <div className="text-sm text-muted-foreground">Water Saved</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold text-foreground">2x</div>
                <div className="text-sm text-muted-foreground">Faster Alerts</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold text-foreground">15%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-slide-up delay-200">
            {/* Main Card */}
            <div className="card-elevated p-6 lg:p-8 glow-primary">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold text-foreground">Upper East Field</h3>
                  <p className="text-sm text-muted-foreground">Maize • 2.5 hectares</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-leaf/10 text-leaf text-sm font-medium">
                  Healthy
                </div>
              </div>

              {/* Live Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="stat-card text-center">
                  <Droplets className="w-5 h-5 text-sky mx-auto mb-2" />
                  <div className="font-display font-bold text-xl text-foreground">32%</div>
                  <div className="text-xs text-muted-foreground">Soil Moisture</div>
                </div>
                <div className="stat-card text-center">
                  <Thermometer className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="font-display font-bold text-xl text-foreground">24°C</div>
                  <div className="text-xs text-muted-foreground">Temperature</div>
                </div>
                <div className="stat-card text-center">
                  <Wind className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                  <div className="font-display font-bold text-xl text-foreground">12 km/h</div>
                  <div className="text-xs text-muted-foreground">Wind Speed</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-32 bg-gradient-to-r from-sky-light/50 to-leaf-light/50 rounded-xl flex items-end justify-around px-4 pb-4 mb-6">
                {[65, 45, 70, 55, 80, 60, 75].map((height, i) => (
                  <div
                    key={i}
                    className="w-6 bg-primary/60 rounded-t-md transition-all hover:bg-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Recommendation */}
              <div className="p-4 rounded-xl bg-sun-light/50 border border-sun/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Recommendation</div>
                    <p className="text-sm text-muted-foreground">
                      Wait — 15mm rain forecast in 24h. Save water today.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 card-elevated p-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-leaf-light flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <div className="text-xs">
                  <div className="font-medium text-foreground">Growth Stage</div>
                  <div className="text-muted-foreground">V6 - Vegetative</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 card-elevated p-3 animate-float delay-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-light flex items-center justify-center">
                  <span className="text-lg">🌧️</span>
                </div>
                <div className="text-xs">
                  <div className="font-medium text-foreground">Next Rain</div>
                  <div className="text-muted-foreground">Tomorrow 2PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
