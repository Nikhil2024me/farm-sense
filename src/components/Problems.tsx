import { CloudRain, Bug, Droplets, Mountain, MessageCircle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Climate Extremes",
    description: "Droughts, heatwaves, floods and unpredictable seasons damage yields and increase costs.",
    color: "sky",
  },
  {
    icon: Bug,
    title: "Pest & Disease Pressure",
    description: "Warmer climates are expanding pest ranges and outbreak intensity. Early detection reduces losses.",
    color: "accent",
  },
  {
    icon: Droplets,
    title: "Water Scarcity",
    description: "Poor irrigation timing wastes water and reduces yields. Precision irrigation saves resources.",
    color: "primary",
  },
  {
    icon: Mountain,
    title: "Soil Degradation",
    description: "pH imbalance, salinity, and low organic matter reduce fertility and crop resilience.",
    color: "earth",
  },
  {
    icon: MessageCircle,
    title: "Lack of Timely Information",
    description: "Many smallholders lack access to local, actionable advice on planting, pest control, and markets.",
    color: "leaf",
  },
  {
    icon: TrendingDown,
    title: "Market Volatility",
    description: "Price shocks and access problems reduce farmer income. Better timing improves returns.",
    color: "accent",
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Why This Matters</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Farmers face growing pressures
          </h2>
          <p className="text-lg text-muted-foreground">
            Climate change, volatile markets, and limited information make farming harder than ever. 
            Timely local data and simple advice are essential for profitable, resilient farms.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-elevated card-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  problem.color === "sky" ? "bg-sky-light text-sky" :
                  problem.color === "accent" ? "bg-accent/10 text-accent" :
                  problem.color === "primary" ? "bg-primary/10 text-primary" :
                  problem.color === "earth" ? "bg-earth-light text-earth" :
                  "bg-leaf-light text-leaf"
                }`}
              >
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
