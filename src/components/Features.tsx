import { Droplets, Sun, CloudRain, Leaf, Bell, BarChart3, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Soil Moisture Monitoring",
    description: "Real-time root-zone moisture readings every 15 minutes. Know exactly when to irrigate.",
    badge: "Core",
  },
  {
    icon: Sun,
    title: "Weather Forecasts",
    description: "Hyperlocal hourly, 3-day, and 10-day forecasts with field-level accuracy.",
    badge: "Core",
  },
  {
    icon: CloudRain,
    title: "Rain Integration",
    description: "Automatic irrigation holds when rain is forecast. Never water before a storm.",
    badge: "Smart",
  },
  {
    icon: Leaf,
    title: "Crop Stage Tracking",
    description: "Growth stage-based advice for planting, fertilization, and harvest windows.",
    badge: "Advisory",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "SMS, push & email alerts for frost, drought, pests, and critical thresholds.",
    badge: "Alerts",
  },
  {
    icon: BarChart3,
    title: "Historical Trends",
    description: "Analyze patterns over seasons. Export data as CSV for your records.",
    badge: "Analytics",
  },
  {
    icon: Zap,
    title: "Pump Automation",
    description: "Connect your irrigation system for automatic control based on sensor data.",
    badge: "Pro",
  },
  {
    icon: Globe,
    title: "Multi-Field Dashboard",
    description: "Monitor all your fields from one place. Health status at a glance.",
    badge: "Scale",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Platform Features</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to farm smarter
          </h2>
          <p className="text-lg text-muted-foreground">
            From soil sensors to satellite data, Weather v0 connects all the dots 
            and delivers simple, actionable recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated card-hover p-6 group relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                  {feature.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
