import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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

interface ProductCardProps {
  product: Product;
  onViewMore: (product: Product) => void;
}

export const ProductCard = ({ product, onViewMore }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-golden transition-all duration-300 hover:shadow-hover cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-golden transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.subCategory}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
              {product.size}
            </span>
            <span className="inline-block px-2 py-1 text-xs bg-golden/10 text-golden rounded">
              {product.category}
            </span>
          </div>
        </div>
        <Button
          variant="elegant"
          size="sm"
          className="w-full"
          onClick={() => onViewMore(product)}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
};
