import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-maroon text-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <div className="h-1 w-24 bg-golden mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-card/90">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Visit Us Card */}
          <div className="flex flex-col items-center text-center p-6 bg-card/10 rounded-lg backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
            <MapPin className="h-12 w-12 text-golden mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-card/80">
              Plot no.213 chandra nagar A9 dukan kalwar road jhotwara, Jaipur, Rajasthan (302012) India
            </p>
          </div>

          {/* Call Us Card */}
          <div className="flex flex-col items-center text-center p-6 bg-card/10 rounded-lg backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
            <Phone className="h-12 w-12 text-golden mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-card/80">
              +91 9982776581<br />
              +91 7792025652<br />
              Mon-Sat: 9:00 AM - 7:00 PM
            </p>
          </div>

          {/* Email Us Card */}
          <div className="flex flex-col items-center text-center p-6 bg-card/10 rounded-lg backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
            <Mail className="h-12 w-12 text-golden mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-card/80">
              deepakjamini@gmail.com <br />
              deepakjamini65@gmail.com<br />
              We reply within 24 hours
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* CORRECTED: Instagram button now points to the correct URL */}
            <Button
              variant="elegant"
              size="lg"
              className="border-card text-card hover:bg-card hover:text-maroon"
              onClick={() => window.open("https://www.instagram.com/swastik_marble_art/", "_blank")}
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </Button>
            
            {/* REMOVED: Facebook button has been deleted */}

            {/* CORRECTED: WhatsApp button now uses a real phone number from your contact details */}
            <Button
              variant="elegant"
              size="lg"
              className="border-card text-card hover:bg-card hover:text-maroon"
              onClick={() => window.open("https://wa.me/+919982776581", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>

            {/* CORRECTED: Gmail button now correctly opens an email client */}
            <Button
              variant="elegant"
              size="lg"
              className="border-card text-card hover:bg-card hover:text-maroon"
              onClick={() => window.location.href = "mailto:deepakjamini65@gmail.com"}
            >
              <Mail className="h-5 w-5 mr-2" />
              Gmail
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-card/20 text-center text-card/70">
        <p>&copy; 2025 Swastik Marble Art. All rights reserved. Crafted with devotion.</p>
      </div>
    </section>
  );
};
