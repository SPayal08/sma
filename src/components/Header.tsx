import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (section: string) => void;
}

export const Header = ({ searchQuery, onSearchChange, onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-elegant border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="text-2xl md:text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Swastik Marble Art
          </button>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for marble art..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-background border-border focus:border-golden focus:ring-golden"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => handleNavClick("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("products")}>
              Products
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("contact")}>
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for marble art..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background border-border focus:border-golden focus:ring-golden"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-4">
            <Button variant="ghost" onClick={() => handleNavClick("home")} className="justify-start">
              Home
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("products")} className="justify-start">
              Products
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("about")} className="justify-start">
              About
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick("contact")} className="justify-start">
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
