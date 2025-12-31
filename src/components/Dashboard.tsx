import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Thermometer, Wind, Sun, CloudRain, ArrowRight, MapPin, Check } from "lucide-react";
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

const Dashboard = () => {
  const { toast } = useToast();
  const [isAddFieldOpen, setIsAddFieldOpen] = useState(false);
  const [fieldName, setFieldName] = useState("");
  const [cropType, setCropType] = useState("");
  const [irrigatedFields, setIrrigatedFields] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const fields = [
    { name: "Upper East", crop: "Maize", status: "healthy", moisture: 32, temp: 24, alerts: 0 },
    { name: "South Valley", crop: "Wheat", status: "warning", moisture: 18, temp: 26, alerts: 1 },
    { name: "River Plot", crop: "Rice", status: "healthy", moisture: 65, temp: 23, alerts: 0 },
  ];

  const forecast = [
    { day: "Today", icon: "☀️", high: 28, low: 18, rain: 0 },
    { day: "Tomorrow", icon: "🌧️", high: 24, low: 16, rain: 15 },
    { day: "Wed", icon: "⛅", high: 26, low: 17, rain: 5 },
    { day: "Thu", icon: "☀️", high: 29, low: 19, rain: 0 },
    { day: "Fri", icon: "☀️", high: 30, low: 20, rain: 0 },
  ];

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

  const handleIrrigate = (fieldName: string) => {
    setIrrigatedFields([...irrigatedFields, fieldName]);
    toast({
      title: "Irrigation Started 💧",
      description: `${fieldName} is now being irrigated. Estimated time: 45 minutes.`,
    });
  };

  const handleFieldClick = (fieldName: string) => {
    setSelectedField(fieldName);
    toast({
      title: `${fieldName} Selected`,
      description: "View detailed analytics and controls for this field.",
    });
  };

  return (
    <>
      <section id="dashboard" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 border border-sky/20 mb-6">
              <span className="text-sm font-medium text-sky">Live Dashboard Preview</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              All your fields, one view
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitor conditions, receive alerts, and make decisions from anywhere.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="card-elevated p-4 lg:p-8 max-w-6xl mx-auto">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Farm Dashboard</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  3 active fields • Last sync: 2 min ago
                </p>
              </div>
              <Button size="sm" onClick={() => setIsAddFieldOpen(true)}>
                Add Field
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left: Field Cards */}
              <div className="lg:col-span-2 space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={index}
                    onClick={() => handleFieldClick(field.name)}
                    className={`p-4 rounded-xl bg-secondary/50 border transition-all cursor-pointer ${
                      selectedField === field.name 
                        ? "border-primary shadow-md" 
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-display font-semibold text-foreground">{field.name}</h4>
                        <p className="text-sm text-muted-foreground">{field.crop}</p>
                      </div>
                      <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        field.status === "healthy" 
                          ? "bg-leaf/10 text-leaf" 
                          : "bg-accent/10 text-accent"
                      }`}>
                        {field.status === "healthy" ? "Healthy" : "Needs attention"}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-sky" />
                        <div>
                          <div className="font-semibold text-foreground">{field.moisture}%</div>
                          <div className="text-xs text-muted-foreground">Moisture</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-accent" />
                        <div>
                          <div className="font-semibold text-foreground">{field.temp}°C</div>
                          <div className="text-xs text-muted-foreground">Temp</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="font-semibold text-foreground">{field.alerts}</div>
                          <div className="text-xs text-muted-foreground">Alerts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Action */}
                <div className="p-4 rounded-xl bg-sun-light/50 border border-sun/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sun/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">South Valley needs irrigation</div>
                      <p className="text-sm text-muted-foreground">Soil moisture below 20% threshold</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="accent"
                      onClick={() => handleIrrigate("South Valley")}
                      disabled={irrigatedFields.includes("South Valley")}
                    >
                      {irrigatedFields.includes("South Valley") ? (
                        <>
                          <Check className="w-4 h-4" />
                          Irrigating
                        </>
                      ) : (
                        "Irrigate Now"
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Weather & More */}
              <div className="space-y-4">
                {/* 5-Day Forecast */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-sky-light/50 to-background border border-border/50">
                  <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-sun" />
                    5-Day Forecast
                  </h4>
                  <div className="space-y-3">
                    {forecast.map((day, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground w-16">{day.day}</span>
                        <span className="text-lg">{day.icon}</span>
                        <span className="text-foreground font-medium">{day.high}°</span>
                        <span className="text-muted-foreground">{day.low}°</span>
                        <span className="text-sky flex items-center gap-1">
                          <CloudRain className="w-3 h-3" />
                          {day.rain}mm
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sensor Status */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <h4 className="font-display font-semibold text-foreground mb-4">Sensor Health</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Online Nodes</span>
                      <span className="text-leaf font-medium">8/8</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Battery Avg</span>
                      <span className="text-foreground font-medium">87%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last Reading</span>
                      <span className="text-foreground font-medium">2 min ago</span>
                    </div>
                  </div>
                </div>
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
              <Label htmlFor="dashFieldName">Field Name</Label>
              <Input
                id="dashFieldName"
                placeholder="e.g., North Valley Plot"
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dashCropType">Crop Type</Label>
              <Input
                id="dashCropType"
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

export default Dashboard;
