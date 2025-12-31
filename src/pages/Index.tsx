import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Dashboard from "@/components/Dashboard";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Weather v0 — Local Weather, Soil & Crop Insights for Every Farmer</title>
        <meta 
          name="description" 
          content="Real-time local weather, soil moisture sensors, and crop alerts. Actionable guidance so farmers can irrigate smarter, reduce losses, and improve yield." 
        />
        <meta name="keywords" content="farm weather station, soil moisture sensor, irrigation scheduler, pest alerts, smallholder agriculture, LoRa farm sensors" />
        <link rel="canonical" href="https://weatherv0.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Weather v0 — Smart Farming Starts Here" />
        <meta property="og:description" content="Local weather and soil monitoring for smallholder farmers. Save water. Reduce losses. Grow better." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Weather v0",
            "applicationCategory": "Agriculture",
            "description": "Local weather and soil monitoring platform for farmers",
            "offers": {
              "@type": "Offer",
              "price": "19",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Problems />
          <Features />
          <HowItWorks />
          <Dashboard />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
