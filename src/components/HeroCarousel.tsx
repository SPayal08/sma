import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Saraswati  from "@/assets/main1.jpeg";
import  Parshwanth  from "@/assets/main2.jpeg";
import Handicraft from "@/assets/main3.jpeg";

const slides = [
  {
    image: Saraswati,
    // CORRECTED: Title now matches the image for better accuracy.
    title: "Divine Marble Saraswati ",
    subtitle: "Handcrafted with Divine Precision",
    // ADDED: targetId for the "Explore Collection" button.
    targetId: "products", 
  },
  {
    image: Parshwanth,
    title: "Divine Marble Parshwanth ",
    subtitle: "Architectural Masterpieces in Marble",
    targetId: "products",
  },
  {
    image: Handicraft,
    title: "Beautiful handicraft items",
    subtitle: "Elegance Carved in Stone",
    targetId: "products",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // --- NEW: SCROLL HANDLER FUNCTION ---
  // This function finds an element on the page by its ID and smoothly scrolls to it.
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
              <h2 className="text-4xl md:text-6xl font-bold text-card mb-4 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-card/90 mb-8 animate-fade-in">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 animate-fade-in">
                {/* --- CORRECTED BUTTONS with onClick --- */}
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => handleScroll(slide.targetId)}
                >
                  Explore Collection
                </Button>
                <Button 
                  variant="elegant" 
                  size="lg"
                  // "contact" is the ID of the section we want to scroll to.
                  onClick={() => handleScroll("contact")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card text-foreground"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card text-foreground"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-golden"
                : "w-2 bg-card/60 hover:bg-card"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

