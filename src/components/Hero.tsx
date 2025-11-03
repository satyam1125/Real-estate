import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
import React from "react";

export default function Hero() {
  function scrollToProperties() {
    const el = document.getElementById("properties");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium">Ulwe, Navi Mumbai</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-secondary mt-2">Property Today</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Discover premium flats, shops, and offices in Ulwe's most sought-after locations.
            Your dream property is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="gradient-luxury text-foreground hover:opacity-90 transition-smooth px-8 py-6 text-lg"
            >
              <Link to="/flats-rent">
                <Search className="w-5 h-5 mr-2" />
                Browse Properties
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-sm text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
