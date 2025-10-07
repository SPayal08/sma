import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

interface ProductFiltersProps {
  selectedCategories: string[];
  selectedSize: string;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
}

const categories = [
  "Marble Moorti",
  "Marble Temple",
  "Marble Bust and Statue",
  "Handicraft Items",
];

const sizes = ["Small", "Medium", "Large"];

export const ProductFilters = ({
  selectedCategories,
  selectedSize,
  onCategoryChange,
  onSizeChange,
}: ProductFiltersProps) => {
  return (
    <aside className="w-full md:w-64 bg-card rounded-lg p-6 shadow-elegant border border-border h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-gradient-gold rounded-full"></span>
        Filters
      </h3>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange(category)}
                  className="border-golden data-[state=checked]:bg-golden data-[state=checked]:border-golden"
                />
                <Label
                  htmlFor={category}
                  className="text-sm text-foreground cursor-pointer hover:text-golden transition-colors"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Size Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Size</h4>
          <RadioGroup value={selectedSize} onValueChange={onSizeChange}>
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={size}
                  id={size}
                  className="border-golden text-golden"
                />
                <Label
                  htmlFor={size}
                  className="text-sm text-foreground cursor-pointer hover:text-golden transition-colors"
                >
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </aside>
  );
};
