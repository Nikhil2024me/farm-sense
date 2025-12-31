import { Cpu, Radio, Cloud, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    number: "01",
    title: "Sensors Collect",
    description: "ESP32 nodes read soil moisture, temperature, humidity, and rainfall every 15 minutes. Data is stored locally if connectivity drops.",
    color: "primary",
  },
  {
    icon: Radio,
    number: "02",
    title: "Data Transmitted",
    description: "Information is sent via LoRa, Wi-Fi, or GSM to a central gateway. Works in remote areas with low power consumption.",
    color: "sky",
  },
  {
    icon: Cloud,
    number: "03",
    title: "Cloud Processes",
    description: "Our backend ingests data, applies crop-specific rules, checks weather forecasts, and generates personalized recommendations.",
    color: "leaf",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Advice Delivered",
    description: "Get actionable insights via dashboard, SMS, or push alerts. Control irrigation remotely with one tap.",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 border border-leaf/20 mb-6">
            <span className="text-sm font-medium text-leaf">How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From field to phone in real-time
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple hardware, smart software. Weather v0 turns raw sensor data 
            into decisions you can act on immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-sky via-leaf to-accent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="card-elevated p-6 text-center relative z-10">
                  {/* Number */}
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 font-display font-bold text-sm px-3 py-1 rounded-full ${
                    step.color === "primary" ? "bg-primary text-primary-foreground" :
                    step.color === "sky" ? "bg-sky text-primary-foreground" :
                    step.color === "leaf" ? "bg-leaf text-primary-foreground" :
                    "bg-accent text-accent-foreground"
                  }`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2 ${
                    step.color === "primary" ? "bg-primary/10 text-primary" :
                    step.color === "sky" ? "bg-sky-light text-sky" :
                    step.color === "leaf" ? "bg-leaf-light text-leaf" :
                    "bg-accent/10 text-accent"
                  }`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
