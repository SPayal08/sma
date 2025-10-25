// --- STEP 1: IMPORT EVERY IMAGE ---
// This is the crucial step. We import each image file into a variable.
// The build process will then replace these variables with the correct public URLs.

// Ganesha Images
import ganesha from "@/assets/ganesha.jpeg";
import ganesha1 from "@/assets/ganesha1.jpeg";
import ganesha2 from "@/assets/ganesha2.jpeg";
import ganesha3 from "@/assets/ganesha3.jpeg";
import ganesha4 from "@/assets/ganesha4.jpeg";

// Temple Images
import temple from "@/assets/temple.jpeg";
import temple1 from "@/assets/temple1.jpeg";
import temple2 from "@/assets/temple2.jpeg";
import mandir from "@/assets/mandir.jpeg";
import mandir1 from "@/assets/mandir1.jpeg";
import mandir2 from "@/assets/mandir2.jpeg";
import mandir3 from "@/assets/mandir3.jpeg";
import mandir4 from "@/assets/mandir4.jpeg";


// Parasnath Bhagwan Images
import parasnath from "@/assets/parasnath.jpeg";
import parasnath2 from "@/assets/parasnath2.jpeg";
import parasnath3 from "@/assets/parasnath3.jpeg";
import prasanath1 from "@/assets/prasanath1.jpeg";


// Radha Krishna Images
import radhakrishn from "@/assets/radhakrishn.jpeg";
import radhakrishn1 from "@/assets/radhakrishn1.jpeg";
import radhakrishn2 from "@/assets/radhakrishn2.jpeg";
import radhakrishn3 from "@/assets/radhakrishn3.jpeg";

// Bust and Statue Images
import bust from "@/assets/bust.jpeg";
import bust1 from "@/assets/bust1.jpeg";
import bust2 from "@/assets/bust2.jpeg";
import bust3 from "@/assets/bust3.jpeg";

// Shiva Images
import shiva from "@/assets/shiva.jpeg";
import shiva1 from "@/assets/shiva1.jpeg";
import shiva2 from "@/assets/shiva2.jpeg";
import shiva3 from "@/assets/shiva3.jpeg";

// Hanuman Images
import hanuman from "@/assets/hanuman.jpeg";
import hanuman1 from "@/assets/hanuman1.jpeg";
import hanuman2 from "@/assets/hanuman2.jpeg";
import hanuman3 from "@/assets/hanuman3.jpeg";
import hanuman4 from "@/assets/hanuman4.jpeg";
import hanuman5 from "@/assets/hanuman5.jpeg";

// Buddha Images
import buddha from "@/assets/buddha.jpeg";
import buddha1 from "@/assets/buddha1.jpeg";
import buddha2 from "@/assets/buddha2.jpeg";

// Saraswati Images
import saraswati from "@/assets/saraswati.jpeg";
import saraswati1 from "@/assets/saraswati1.jpeg";
import saraswati2 from "@/assets/saraswati2.jpeg";
import saraswati3 from "@/assets/saraswati3.jpeg";

// Elephant Image
import elephant from "@/assets/elephant.jpeg";

// Durga Images
import durga from "@/assets/durga.jpeg";
import durga1 from "@/assets/durga1.jpeg";
import durga2 from "@/assets/durga2.jpeg";
import durga3 from "@/assets/durga3.jpeg";

// Ram Darbar Images
import ram from "@/assets/ram.jpeg";
import ram1 from "@/assets/ram1.jpeg";
import ram2 from "@/assets/ram2.jpeg";
import ram3 from "@/assets/ram3.jpeg";

// Swami Images
import swami from "@/assets/swami.jpeg";
import swami1 from "@/assets/swami1.jpeg";
import swami2 from "@/assets/swami2.jpeg";
import swami3 from "@/assets/swami3.jpeg";

// Manibhadra Images
import mani from "@/assets/mani.jpeg";
import mani1 from "@/assets/mani1.jpeg";
import mani2 from "@/assets/mani2.jpeg";
import mani3 from "@/assets/mani3.jpeg";

// Padmavati Images
import padmavati from "@/assets/padmavati.jpeg";
import padmavati1 from "@/assets/padmavati1.jpeg";
import padmavati2 from "@/assets/padmavati2.jpeg";
import padmavati3 from "@/assets/padmavati3.jpeg";

// Handicraft Images
import handi from "@/assets/handi.jpeg";
import handi1 from "@/assets/handi1.jpeg";
import handi2 from "@/assets/handi2.jpeg";


// --- INTERFACES (These are correct, no changes needed) ---
export interface ProductVariant {
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  size: string;
  imageUrl: string;
  variants: ProductVariant[];
}


// --- STEP 2: UPDATE THE PRODUCTS ARRAY ---
// Now we replace all the string paths with the variables we imported above.
export const products: Product[] = [
  {
    id: 1,
    name: " Marble Ganesha",
    category: "Marble Moorti",
    subCategory: "Ganesha Idols",
    size: "Medium",
    imageUrl: ganesha1,
    variants: [
      { name: " Ganesha ", image: ganesha },
      { name: " Ganesha ", image: ganesha2 },
      { name: "Ganesha ", image: ganesha3 },
      { name: " Ganesha ", image: ganesha1 },
    ],
  },
  {
    id: 2,
    name: " Marble Temple",
    category: "Marble Temple",
    subCategory: "Home Temples",
    size: "Large",
    imageUrl: temple,
    variants: [
      { name: "Temple - White", image: temple },
      { name: " Temple ", image: temple1 },
      { name: " Temple ", image: temple2 },
    ],
  },
  {
    id: 3,
    name: "Parasnath Bhagwan",
    category: "Marble Moorti",
    subCategory: "Bhagwan Idols",
    size: "Medium",
    imageUrl: prasanath1,
    variants: [
      { name: "Parasnath Bhagwan", image: parasnath },
      { name: "Parasnath Bhagwan", image: parasnath2 },
      { name: "Parasnath Bhagwan", image: prasanath1 },
      { name: "Parasnath Bhagwan", image: parasnath3 },
    ],
  },
  {
    id: 4,
    name: "Radha Krishna Statue",
    category: "Marble Moorti",
    subCategory: "Krishna Idols",
    size: "Large",
    imageUrl: radhakrishn,
    variants: [
      { name: "Radha Krishna ", image: radhakrishn },
      { name: "Radha Krishna ", image: radhakrishn1 },
      { name: "Radha Krishna ", image: radhakrishn2 },
      { name: "Radha Krishna ", image: radhakrishn3 },
    ],
  },
  {
    id: 5,
    name: "Marble Bust and Statue",
    category: "Marble Bust and Statue",
    subCategory: "Deity Busts",
    size: "Medium",
    imageUrl: bust,
    variants: [
      { name: " Bust and Statue ", image: bust },
      { name: "Bust and Statue ", image: bust1 },
      { name: "Bust and Statue ", image: bust2 },
      { name: "Bust and Statue ", image: bust3 },
    ],
  },
  {
    id: 6,
    name: "Lord Shiva",
    category: "Marble Moorti",
    subCategory: "Shiva Idols",
    size: "Small",
    imageUrl: shiva,
    variants: [
      { name: "Shiva", image: shiva },
      { name: "Shiva", image: shiva1 },
      { name: "Shiva", image: shiva2 },
      { name: "Shiva", image: shiva3 },
    ],
  },
  {
    id: 7,
    name: "Hanuman Ji Moorti",
    category: "Marble Moorti",
    subCategory: "Hanuman Idols",
    size: "Large",
    imageUrl: hanuman,
    variants: [
      { name: "Hanuman- standing ", image: hanuman },
      { name: "Hanuman- standing ", image: hanuman1 },
      { name: "Hanuman- sitting ", image: hanuman2 },
      { name: "Hanuman- sitting ", image: hanuman3 },
      { name: "Hanuman- sitting panchmukhi ", image: hanuman4 },
      { name: "Hanuman- standing panchmukhi ", image: hanuman5 },
    ],
  },
  {
    id: 8,
    name: "Buddha Meditation Statue",
    category: "Marble Moorti",
    subCategory: "Buddha Statues",
    size: "Medium",
    imageUrl: buddha,
    variants: [
      { name: "Buddha ", image: buddha },
      { name: "Buddha ", image: buddha1 },
      { name: "Buddha ", image: buddha2 },
    ],
  },
  {
    id: 9,
    name: "Pooja Mandir Deluxe",
    category: "Marble Temple",
    subCategory: "Prayer Rooms",
    size: "Large",
    imageUrl: mandir4,
    variants: [
      { name: "Mandir ", image: mandir4 },
      { name: "Mandir ", image: mandir },
      { name: "Mandir ", image: mandir2 },
      { name: "Mandir ", image: mandir3 },
      { name: "Mandir ", image: mandir1 },
    ],
  },
  {
    id: 11,
    name: "Saraswati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: saraswati,
    variants: [
      { name: "Saraswati ", image: saraswati },
      { name: "Saraswati", image: saraswati1 },
      { name: "Saraswati", image: saraswati2 },
      { name: "Saraswati", image: saraswati3 },
    ],
  },
  {
    id: 12,
    name: "Marble Elephant Pair",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: elephant,
    variants: [
      { name: "Elephants ", image: elephant },
    ],
  },
  {
    id: 13,
    name: " Marble Ganesha",
    category: "Marble Moorti",
    subCategory: "Ganesha Idols",
    size: "small",
    imageUrl: ganesha4,
    variants: [
      { name: " Ganesha ", image: ganesha4 },
    ],
  },
  {
    id: 14,
    name: "Durga Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: durga,
    variants: [
      { name: "Durga", image: durga },
      { name: "Durga", image: durga1 },
      { name: "Durga", image: durga2 },
      { name: "Durga", image: durga3 },
    ],
  },
  {
    id: 15,
    name: " Ram Darbar",
    category: "Marble Moorti",
    subCategory: "Ram Darbar",
    size: "Medium",
    imageUrl: ram,
    variants: [
      { name: " Darbar ", image: ram },
      { name: " Darbar ", image: ram1 },
      { name: "Darbar ", image: ram2 },
      { name: "Darbar", image: ram3 },
    ],
  },
  {
    id: 16,
    name: "Mahaveer Swami",
    category: "Marble Moorti",
    subCategory: "Swami",
    size: "Medium",
    imageUrl: swami,
    variants: [
      { name: " Swami ", image: swami },
      { name: " Swami ", image: swami1 },
      { name: "Swami ", image: swami2 },
      { name: "Swami", image: swami3 },
    ],
  },
  {
    id: 17,
    name: "Manibhadra veer",
    category: "Marble Moorti",
    subCategory: "veer",
    size: "Medium",
    imageUrl: mani,
    variants: [
      { name: " Swami ", image: mani },
      { name: " Swami ", image: mani1 },
      { name: "Swami ", image: mani2 },
      { name: "Swami", image: mani3 },
    ],
  },
  {
    id: 18,
    name: "Padmavati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: padmavati,
    variants: [
      { name: "Durga", image: padmavati },
      { name: "Durga", image: padmavati1 },
      { name: "Durga", image: padmavati2 },
      { name: "Durga", image: padmavati3 },
    ],
  },
  {
    id: 19,
    name: "Decorative Pieces",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: handi,
    variants: [
      { name: "handicraft ", image: handi },
      { name: "handicraft ", image: handi1 },
      { name: "handicraft ", image: handi2 },
    ],
  },
];