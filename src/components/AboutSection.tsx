export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-gold bg-clip-text text-transparent">Swastik Marble Art</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-8 rounded-full"></div>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Welcome to Swastik Marble Art, where artistry meets devotion. We are passionate craftsmen 
              dedicated to creating exquisite marble statues that embody the divine essence of 
              Indian spirituality and cultural heritage.
            </p>
            
            <p className="text-lg">
              Each piece in our collection is meticulously handcrafted by skilled artisans who 
              have inherited centuries-old techniques. Using only the finest quality marble, 
              we transform raw stone into sacred works of art that bring peace, prosperity, 
              and divine blessings to your homes and temples.
            </p>
            
            <p className="text-lg">
              From intricate Ganesha idols to majestic temple structures, our creations are 
              designed to inspire reverence and admiration. We believe that every statue tells 
              a story—a story of faith, craftsmanship, and timeless beauty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-lg shadow-elegant border border-border hover:border-golden transition-all duration-300">
                <div className="text-3xl font-bold text-golden mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-elegant border border-border hover:border-golden transition-all duration-300">
                <div className="text-3xl font-bold text-golden mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Happy Customers</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-elegant border border-border hover:border-golden transition-all duration-300">
                <div className="text-3xl font-bold text-golden mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Handcrafted Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
