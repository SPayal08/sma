import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductFilters } from "@/components/ProductFilters";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { products, Product } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.subCategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedSize !== "All") {
      filtered = filtered.filter((product) => product.size === selectedSize);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategories, selectedSize]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleViewMore = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigate={handleNavigate}
      />
      <main>
        <div id="home">
          <HeroCarousel />
        </div>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Collection
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-gold mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our exquisite range of handcrafted marble statues, each
                piece a testament to divine artistry and spiritual devotion.
              </p>
            </div>

            {/* FIXED LAYOUT WRAPPER */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start">
              {/* Filters Column */}
              <div className="relative">
                <div className="sticky top-28">
                  <ProductFilters
                    selectedCategories={selectedCategories}
                    selectedSize={selectedSize}
                    onCategoryChange={handleCategoryChange}
                    onSizeChange={setSelectedSize}
                  />
                </div>
              </div>

              {/* Product Grid Column */}
              <div className="flex-1 w-full">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-xl text-muted-foreground mb-4">
                      No products found
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewMore={handleViewMore}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
