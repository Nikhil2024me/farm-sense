import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Weather v0 helped me reduce water usage by 35% in the first season. The soil moisture alerts are a game-changer.",
    author: "Maria Santos",
    role: "Maize Farmer, Brazil",
    avatar: "🌽",
    rating: 5,
  },
  {
    quote: "I used to guess when to irrigate. Now I know exactly when my crops need water. My yields increased by 20%.",
    author: "James Okonkwo",
    role: "Smallholder, Nigeria",
    avatar: "🌾",
    rating: 5,
  },
  {
    quote: "The pest alerts saved my tomato crop last season. Got warnings 3 days before the outbreak hit neighboring farms.",
    author: "Priya Sharma",
    role: "Vegetable Grower, India",
    avatar: "🍅",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 mb-6">
            <span className="text-sm font-medium text-earth">Farmer Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by farmers worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of farmers who are growing smarter with Weather v0.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6 lg:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-sun fill-sun" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-earth-light flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
