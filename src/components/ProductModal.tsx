import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- INTERFACES (No changes needed here) ---
interface ProductVariant {
  name: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  size: string;
  imageUrl: string;
  variants: ProductVariant[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  // --- NEW STATE ---
  // This state will hold the URL of the image to be viewed in full screen.
  // It's 'null' when no image is selected.
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  if (!product) return null;

  // Function to close the main modal and also clear any full-screen image
  const handleCloseModal = () => {
    setFullScreenImage(null); // Clear full screen view when closing main modal
    onClose();
  };

  return (
    // We use a React Fragment <> to return multiple top-level elements
    <>
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {product.subCategory}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Explore our collection of {product.subCategory.toLowerCase()} in various styles and colors
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-150px)] pr-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.variants.map((variant, index) => (
                <div
                  key={index}
                  // --- ADDED ONCLICK HANDLER ---
                  // When this div is clicked, we set the fullScreenImage state
                  onClick={() => setFullScreenImage(variant.image)}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-golden transition-all duration-300 hover:shadow-hover cursor-pointer"
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-card font-medium p-4 w-full text-center">
                      {variant.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* --- NEW: FULL-SCREEN IMAGE OVERLAY --- */}
      {/* This section will only render if 'fullScreenImage' is not null */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]"
          // Clicking the dark background will close the full-screen view
          onClick={() => setFullScreenImage(null)}
        >
          {/* A simple 'X' close button */}
          <button
            className="absolute top-4 right-6 text-white text-5xl font-bold hover:text-gray-300"
            onClick={() => setFullScreenImage(null)}
          >
            &times;
          </button>
          
          <div className="relative p-4">
            {/* We stop propagation here so clicking the image itself doesn't close the view */}
            <img
              src={fullScreenImage}
              alt="Full screen product variant"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};
