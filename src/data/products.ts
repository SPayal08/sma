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
    imageUrl: "C:/Users/91999/Desktop/moortiwalas/src/assets/ganesha1.jpeg",
    variants: [
      { name: " Ganesha ", image: "C:/Users/91999/Desktop/moortiwalas/src/assets/ganesha.jpeg" },
      { name: " Ganesha ", image: "C:/Users/91999/Desktop/moortiwalas/src/assets/ganesha2.jpeg" },
      { name: "Ganesha ", image: "/src/assets/ganesha3.jpeg" },
      { name: " Ganesha ", image: "/src/assets/ganesha1.jpeg" },
    ],
  },
  {
    id: 2,
    name: " Marble Temple",
    category: "Marble Temple",
    subCategory: "Home Temples",
    size: "Large",
    imageUrl: "/src/assets/temple.jpeg",
    variants: [
      { name: "Temple - White", image: "/src/assets/temple.jpeg" },
      { name: " Temple ", image: "/src/assets/temple1.jpeg" },
      { name: " Temple ", image: "/src/assets/temple2.jpeg" },
      
    ],
  },
  {
    id: 3,
    name: "Parasnath Bhagwan",
    category: "Marble Moorti",
    subCategory: "Bhagwan Idols",
    size: "Medium",
    imageUrl: "/src/assets/prasanath1.jpeg",
    variants: [
      { name: "Parasnath Bhagwan", image: "/src/assets/parasnath.jpeg" },
      { name: "Parasnath Bhagwan", image: "/src/assets/parasnath2.jpeg" },
      { name: "Parasnath Bhagwan", image: "/src/assets/prasanath1.jpeg" },
     { name: "Parasnath Bhagwan", image: "/src/assets/parasnath3.jpeg" },
    ],
  },
  {
    id: 4,
    name: "Radha Krishna Statue",
    category: "Marble Moorti",
    subCategory: "Krishna Idols",
    size: "Large",
    imageUrl: "/src/assets/radhakrishn.jpeg",
    variants: [
      { name: "Radha Krishna ", image: "/src/assets/radhakrishn.jpeg" },
      { name: "Radha Krishna ", image: "/src/assets/radhakrishn1.jpeg" },
      { name: "Radha Krishna ", image: "/src/assets/radhakrishn2.jpeg" },
      { name: "Radha Krishna ", image: "/src/assets/radhakrishn3.jpeg" },
    ],
  },
  {
    id: 5,
    name: "Marble Bust and Statue",
    category: "Marble Bust and Statue",
    subCategory: "Deity Busts",
    size: "Medium",
    imageUrl: "/src/assets/bust.jpeg",
    variants: [
      { name: " Bust and Statue ", image: "/src/assets/bust.jpeg" },
      { name: "Bust and Statue ", image: "/src/assets/bust1.jpeg" },
      { name: "Bust and Statue ", image: "/src/assets/bust2.jpeg" },
      { name: "Bust and Statue ", image: "/src/assets/bust3.jpeg" },
    ],
  },
  {
    id: 6,
    name: "Lord Shiva",
    category: "Marble Moorti",
    subCategory: "Shiva Idols",
    size: "Small",
    imageUrl: "/src/assets/shiva.jpeg",
    variants: [
      { name: "Shiva", image: "/src/assets/shiva.jpeg" },
      { name: "Shiva", image: "/src/assets/shiva1.jpeg" },
      { name: "Shiva", image: "/src/assets/shiva2.jpeg" },
      { name: "Shiva", image: "/src/assets/shiva3.jpeg" },
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
      { name: "Hanuman- standing ", image: "/src/assets/hanuman.jpeg" },
      { name: "Hanuman- standing ", image: "/src/assets/hanuman1.jpeg" },
      { name: "Hanuman- sitting ", image: "/src/assets/hanuman2.jpeg" },
      { name: "Hanuman- sitting ", image: "/src/assets/hanuman3.jpeg" },
      { name: "Hanuman- sitting panchmukhi ", image: "/src/assets/hanuman4.jpeg" },
      { name: "Hanuman- standing panchmukhi ", image: "/src/assets/hanuman5.jpeg" },
    ],
  },
  {
    id: 8,
    name: "Buddha Meditation Statue",
    category: "Marble Moorti",
    subCategory: "Buddha Statues",
    size: "Medium",
    imageUrl: "/src/assets/buddha.jpeg",
    variants: [
      { name: "Buddha ", image: "/src/assets/buddha.jpeg" },
      { name: "Buddha ", image: "/src/assets/buddha1.jpeg" },
      { name: "Buddha ", image: "/src/assets/buddha2.jpeg" },
    ],
  },
  {
    id: 9,
    name: "Pooja Mandir Deluxe",
    category: "Marble Temple",
    subCategory: "Prayer Rooms",
    size: "Large",
    imageUrl: "/src/assets/mandir4.jpeg",
    variants: [
      { name: "Mandir ", image: "/src/assets/mandir4.jpeg" },
      { name: "Mandir ", image: "/src/assets/mandir.jpeg" },
      { name: "Mandir ", image: "/src/assets/mandir2.jpeg" },
      { name: "Mandir ", image: "/src/assets/mandir3.jpeg" },
      { name: "Mandir ", image: "/src/assets/mandir1.jpeg" },
    ],
  },
  {
    id: 11,
    name: "Saraswati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/src/assets/saraswati.jpeg",
    variants: [
      { name: "Saraswati ", image: "/src/assets/saraswati.jpeg" },
      { name: "Saraswati", image: "/src/assets/saraswati1.jpeg" },
      { name: "Saraswati", image: "/src/assets/saraswati2.jpeg" },
      { name: "Saraswati", image: "/src/assets/saraswati3.jpeg" },
    ],
  },
  {
    id: 12,
    name: "Marble Elephant Pair",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: "/src/assets/elephant.jpeg",
    variants: [
      { name: "Elephants ", image: "/src/assets/elephant.jpeg" },
    ],
  },
   {
    id: 13,
    name: " Marble Ganesha",
    category: "Marble Moorti",
    subCategory: "Ganesha Idols",
    size: "small",
    imageUrl: "/src/assets/ganesha4.jpeg",
    variants: [
      { name: " Ganesha ", image: "/src/assets/ganesha4.jpeg" }
    ],
  },
  {
    id: 14,
    name: "Durga Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/src/assets/durga.jpeg",
    variants: [
      { name: "Durga", image: "/src/assets/durga.jpeg" },
      { name: "Durga", image: "/src/assets/durga1.jpeg" },
      { name: "Durga", image: "/src/assets/durga2.jpeg" },
      { name: "Durga", image: "/src/assets/durga3.jpeg" },
    ],
  },
  {
    id: 15,
    name: " Ram Darbar",
    category: "Marble Moorti",
    subCategory: "Ram Darbar",
    size: "Medium",
    imageUrl: "/src/assets/ram.jpeg",
    variants: [
      { name: " Darbar ", image: "/src/assets/ram.jpeg" },
      { name: " Darbar ", image: "/src/assets/ram1.jpeg" },
      { name: "Darbar ", image: "/src/assets/ram2.jpeg" },
      { name: "Darbar", image: "/src/assets/ram3.jpeg" },
    ],
  },
  {
    id: 16,
    name: "Mahaveer Swami",
    category: "Marble Moorti",
    subCategory: "Swami",
    size: "Medium",
    imageUrl: "/src/assets/swami.jpeg",
    variants: [
      { name: " Swami ", image: "/src/assets/swami.jpeg" },
      { name: " Swami ", image: "/src/assets/swami1.jpeg" },
      { name: "Swami ", image: "/src/assets/swami2.jpeg" },
      { name: "Swami", image: "/src/assets/swami3.jpeg" },
    ],
  },
  {
    id: 17,
    name: "Manibhadra veer",
    category: "Marble Moorti",
    subCategory: "veer",
    size: "Medium",
    imageUrl: "/src/assets/mani.jpeg",
    variants: [
      { name: " Swami ", image: "/src/assets/mani.jpeg" },
      { name: " Swami ", image: "/src/assets/mani1.jpeg" },
      { name: "Swami ", image: "/src/assets/mani2.jpeg" },
      { name: "Swami", image: "/src/assets/mani3.jpeg" },
    ],
  },
  {
    id: 18,
    name: "Padmavati Mata Statue",
    category: "Marble Moorti",
    subCategory: "Goddess Idols",
    size: "Medium",
    imageUrl: "/src/assets/padmavati.jpeg",
    variants: [
      { name: "Durga", image: "/src/assets/padmavati.jpeg" },
      { name: "Durga", image: "/src/assets/padmavati1.jpeg" },
      { name: "Durga", image: "/src/assets/padmavati2.jpeg" },
      { name: "Durga", image: "/src/assets/padmavati3.jpeg" },
    ],
  },
  {
    id: 19,
    name: "Decorative Pieces",
    category: "Handicraft Items",
    subCategory: "Decorative Pieces",
    size: "Small",
    imageUrl: "/src/assets/handi.jpeg",
    variants: [
      { name: "handicraft ", image: "/src/assets/handi.jpeg" },
      { name: "handicraft ", image: "/src/assets/handi1.jpeg" },
      { name: "handicraft ", image: "/src/assets/handi2.jpeg" },
    ],
  },
];
