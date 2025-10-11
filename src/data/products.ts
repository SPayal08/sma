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

export const products: Product[] = [
  {
    id: 1,
    name: " Marble Ganesha",
    category: "Marble Moorti",
    subCategory: "Ganesha Idols",
    size: "Medium",
    imageUrl: "/assets/ganesha1.jpeg",
    variants: [
      { name: " Ganesha ", image: "/assets/ganesha.jpeg" },
      { name: " Ganesha ", image: "/assets/ganesha2.jpeg" },
      { name: "Ganesha ", image: "/assets/ganesha3.jpeg" },
      { name: " Ganesha ", image: "/assets/ganesha1.jpeg" },
    ],
  },
  {
    id: 2,
    name: " Marble Temple",
    category: "Marble Temple",
    subCategory: "Home Temples",
    size: "Large",
    imageUrl: "/assets/temple.jpeg",
    variants: [
      { name: "Temple - White", image: "/assets/temple.jpeg" },
      { name: " Temple ", image: "/assets/temple1.jpeg" },
      { name: " Temple ", image: "/assets/temple2.jpeg" },
      
    ],
  },
  {
    id: 3,
    name: "Parasnath Bhagwan",
    category: "Marble Moorti",
    subCategory: "Bhagwan Idols",
    size: "Medium",
    imageUrl: "/assets/prasanath1.jpeg",
    variants: [
      { name: "Parasnath Bhagwan", image: "/assets/parasnath.jpeg" },
      { name: "Parasnath Bhagwan", image: "/assets/parasnath2.jpeg" },
      { name: "Parasnath Bhagwan", image: "/assets/prasanath1.jpeg" },
     { name: "Parasnath Bhagwan", image: "/assets/parasnath3.jpeg" },
    ],
  },
  {
    id: 4,
    name: "Radha Krishna Statue",
    category: "Marble Moorti",
    subCategory: "Krishna Idols",
    size: "Large",
    imageUrl: "/assets/radhakrishn.jpeg",
    variants: [
      { name: "Radha Krishna ", image: "/assets/radhakrishn.jpeg" },
      { name: "Radha Krishna ", image: "/assets/radhakrishn1.jpeg" },
      { name: "Radha Krishna ", image: "/assets/radhakrishn2.jpeg" },
      { name: "Radha Krishna ", image: "/assets/radhakrishn3.jpeg" },
    ],
  },
  {
    id: 5,
    name: "Marble Bust and Statue",
    category: "Marble Bust and Statue",
    subCategory: "Deity Busts",
    size: "Medium",
    imageUrl: "/assets/bust.jpeg",
    variants: [
      { name: " Bust and Statue ", image: "/assets/bust.jpeg" },
      { name: "Bust and Statue ", image: "/assets/bust1.jpeg" },
      { name: "Bust and Statue ", image: "/assets/bust2.jpeg" },
      { name: "Bust and Statue ", image: "/assets/bust3.jpeg" },
    ],
  },
  {
    id: 6,
    name: "Lord Shiva",
    category: "Marble Moorti",
    subCategory: "Shiva Idols",
    size: "Small",
    imageUrl: "/assets/shiva.jpeg",
    variants: [
      { name: "Shiva", image: "/assets/shiva.jpeg" },
      { name: "Shiva", image: "/assets/shiva1.jpeg" },
      { name: "Shiva", image: "/assets/shiva2.jpeg" },
      { name: "Shiva", image: "/assets/shiva3.jpeg" },
    ],
  },
  {
    id: 7,
    name: "Hanuman Ji Moorti",
    category: "Marble Moorti",
    subCategory: "Hanuman Idols",
    size: "Large",
    imageUrl: "/src/assets/hanuman.jpeg",
    variants: [
      { name: "Hanuman- standing ", image: "/assets/hanuman.jpeg" },
      { name: "Hanuman- standing ", image: "/assets/hanuman1.jpeg" },
      { name: "Hanuman- sitting ", image: "/assets/hanuman2.jpeg" },
      { name: "Hanuman- sitting ", image: "/assets/hanuman3.jpeg" },
      { name: "Hanuman- sitting panchmukhi ", image: "/assets/hanuman4.jpeg" },
      { name: "Hanuman- standing panchmukhi ", image: "/assets/hanuman5.jpeg" },
    ],
  },
  {
    id: 8,
    name: "Buddha Meditation Statue",
    category: "Marble Moorti",
    subCategory: "Buddha Statues",
    size: "Medium",
    imageUrl: "/assets/buddha.jpeg",
    variants: [
      { name: "Buddha ", image: "/assets/buddha.jpeg" },
      { name: "Buddha ", image: "/assets/buddha1.jpeg" },
      { name: "Buddha ", image: "/assets/buddha2.jpeg" },
    ],
  },
  {
    id: 9,
    name: "Pooja Mandir Deluxe",
    category: "Marble Temple",
    subCategory: "Prayer Rooms",
    size: "Large",
    imageUrl: "/assets/mandir4.jpeg",
    variants: [
      { name: "Mandir ", image: "/assets/mandir4.jpeg" },
      { name: "Mandir ", image: "/assets/mandir.jpeg" },
      { name: "Mandir ", image: "/assets/mandir2.jpeg" },
      { name: "Mandir ", image: "/assets/mandir3.jpeg" },
      { name: "Mandir ", image: "/assets/mandir1.jpeg" },
    ],
  },
  {
    id: 11,
    name: "Saraswati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/assets/saraswati.jpeg",
    variants: [
      { name: "Saraswati ", image: "/assets/saraswati.jpeg" },
      { name: "Saraswati", image: "/assets/saraswati1.jpeg" },
      { name: "Saraswati", image: "/assets/saraswati2.jpeg" },
      { name: "Saraswati", image: "/assets/saraswati3.jpeg" },
    ],
  },
  {
    id: 12,
    name: "Marble Elephant Pair",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: "/assets/elephant.jpeg",
    variants: [
      { name: "Elephants ", image: "/assets/elephant.jpeg" },
    ],
  },
   {
    id: 13,
    name: " Marble Ganesha",
    category: "Marble Moorti",
    subCategory: "Ganesha Idols",
    size: "small",
    imageUrl: "/assets/ganesha4.jpeg",
    variants: [
      { name: " Ganesha ", image: "/assets/ganesha4.jpeg" }
    ],
  },
  {
    id: 14,
    name: "Durga Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/assets/durga.jpeg",
    variants: [
      { name: "Durga", image: "/assets/durga.jpeg" },
      { name: "Durga", image: "/assets/durga1.jpeg" },
      { name: "Durga", image: "/assets/durga2.jpeg" },
      { name: "Durga", image: "/assets/durga3.jpeg" },
    ],
  },
  {
    id: 15,
    name: " Ram Darbar",
    category: "Marble Moorti",
    subCategory: "Ram Darbar",
    size: "Medium",
    imageUrl: "/assets/ram.jpeg",
    variants: [
      { name: " Darbar ", image: "/assets/ram.jpeg" },
      { name: " Darbar ", image: "/assets/ram1.jpeg" },
      { name: "Darbar ", image: "/assets/ram2.jpeg" },
      { name: "Darbar", image: "/assets/ram3.jpeg" },
    ],
  },
  {
    id: 16,
    name: "Mahaveer Swami",
    category: "Marble Moorti",
    subCategory: "Swami",
    size: "Medium",
    imageUrl: "/assets/swami.jpeg",
    variants: [
      { name: " Swami ", image: "/assets/swami.jpeg" },
      { name: " Swami ", image: "/assets/swami1.jpeg" },
      { name: "Swami ", image: "/assets/swami2.jpeg" },
      { name: "Swami", image: "/assets/swami3.jpeg" },
    ],
  },
  {
    id: 17,
    name: "Manibhadra veer",
    category: "Marble Moorti",
    subCategory: "veer",
    size: "Medium",
    imageUrl: "/assets/mani.jpeg",
    variants: [
      { name: " Swami ", image: "/assets/mani.jpeg" },
      { name: " Swami ", image: "/assets/mani1.jpeg" },
      { name: "Swami ", image: "/assets/mani2.jpeg" },
      { name: "Swami", image: "/assets/mani3.jpeg" },
    ],
  },
  {
    id: 18,
    name: "Padmavati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/assets/padmavati.jpeg",
    variants: [
      { name: "Durga", image: "/assets/padmavati.jpeg" },
      { name: "Durga", image: "/assets/padmavati1.jpeg" },
      { name: "Durga", image: "/assets/padmavati2.jpeg" },
      { name: "Durga", image: "/assets/padmavati3.jpeg" },
    ],
  },
  {
    id: 19,
    name: "Decorative Pieces",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: "/assets/handi.jpeg",
    variants: [
      { name: "handicraft ", image: "/assets/handi.jpeg" },
      { name: "handicraft ", image: "/assets/handi1.jpeg" },
      { name: "handicraft ", image: "/assets/handi2.jpeg" },
    ],
  },
];
