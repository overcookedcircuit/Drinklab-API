export interface Drinks {
    id: number;
    name: string;
    category: "smoothie" | "juice" | "milkshake" | "tea" | "coffee" | "lemonade";
    ingredients: string[];
}

export const drinks: Drinks[] = [
    //This section is for smoothies :)
  {
    id: 1,
    name: "Mixed Berry Banana Smoothie",
    category: "smoothie",
    ingredients: ["mixed berries", "banana", "milk", "greek yogurt"]
  },
  {
    id: 2,
    name: "Mango Banana Smoothie",
    category: "smoothie",
    ingredients: ["mango", "banana", "milk"]
  },
  {
    id: 3,
    name: "Green Apple Smoothie",
    category: "smoothie",
    ingredients: ["green apple", "almond milk", "banana", "cinnamon"]
  },
  {
    id: 4,
    name: "Pineapple Banana Smoothie",
    category: "smoothie",
    ingredients: ["pineapple", "banana", "coconut water"]
  },
  {
    id: 5,
    name: "Strawberry Yogurt Smoothie",
    category: "smoothie",
    ingredients: ["strawberry", "banana", "greek yogurt", "milk"]
  },
  {
    id: 6,
    name: "Blueberry Banana Smoothie",
    category: "smoothie",
    ingredients: ["blueberries", "banana", "milk", "chia"]
  },
  {
    id: 7,
    name: "Greek Yogurt Berry Protein Smoothie",
    category: "smoothie",
    ingredients: ["greek yogurt", "mixed berries", "banana", "milk", "chia seeds"]
  },
  {
    id: 8,
    name: "Banana Peanut Butter Oat Smoothie",
    category: "smoothie",
    ingredients: ["banana", "peanut butter", "oats", "milk", "cinnamon"]
  },
  {
    id: 9,
    name: "Strawberry Kefir Chia Smoothie",
    category: "smoothie",
    ingredients: ["strawberry", "kefir", "chia seeds", "banana"]
  },
  {
    id: 10,
    name: "Chocolate Tahini Yogurt Smoothie",
    category: "smoothie",
    ingredients: ["banana", "milk", "greek yogurt", "tahini", "cocoa powder"]
  },
  {
    id: 11,
    name: "Banana Chia Breakfast Smoothie",
    category: "smoothie",
    ingredients: ["banana", "chia", "yogurt", "milk"]
  },
  {
    id: 12,
    name: "Berry Flax Breakfast Smoothie",
    category: "smoothie",
    ingredients: ["berries", "ground flax", "banana", "milk"]
  },
  {
    id: 13,
    name: "Apple Cinnamon Oat Smoothie",
    category: "smoothie",
    ingredients: ["apple", "cinnamon", "oats", "milk"]
  },
  {
    id: 14,
    name: "Banana Matcha Smoothie",
    category: "smoothie",
    ingredients: ["banana", "Japanese matcha", "milk"]
  },
  {
    id: 15,
    name: "Mango Matcha Smoothie",
    category: "smoothie",
    ingredients: ["mango", "matcha", "milk"]
  },
  {
    id: 16,
    name: "Strawberry Matcha Smoothie",
    category: "smoothie",
    ingredients: ["strawberries", "matcha", "milk"]
  },
  {
    id: 17,
    name: "Watermelon Mint Smoothie",
    category: "smoothie",
    ingredients: ["watermelon", "mint leaves", "lime"]
  },
  {
    id: 18,
    name: "Pineapple Cucumber Smoothie",
    category: "smoothie",
    ingredients: ["pineapple", "cucumber", "water"]
  },
  {
    id: 19,
    name: "Berry Lemon Smoothie",
    category: "smoothie",
    ingredients: ["berries", "banana", "water", "lemon"]
  },
];