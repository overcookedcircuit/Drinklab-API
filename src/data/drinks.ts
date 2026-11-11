export interface Drinks {
    id: number;
    name: string;
    category: "smoothie" | "juice" | "milkshake" | "tea" | "coffee" | "lemonade";
    ingredients: string[];
}

export const drinks: Drinks[] = [
  /**Info for where some of the information was found
    https://blenditlb.com/blogs/blendit-blender-journal/25-healthy-smoothie-recipes?srsltid=AYCX9vLPy_SXmMoUfs-SfUyojRXucGtHUtH6RpDAXuMZSRe4y_o6Dwiq
    https://bakingmischief.com/milkshake-recipes/?utm_source=Pinterest&utm_medium=organic
    https://chefsbliss.com/blender-milkshake-recipes/?utm_source=Pinterest&utm_medium=organic
    https://www.tasteofhome.com/collection/tea-recipes-you-havent-made-yet/
   
  */
    //This section is for smoothies :)
  {
    id: 1001,
    name: "Mixed Berry Banana Smoothie",
    category: "smoothie",
    ingredients: ["½ cup mixed berries", "½ banana", "¾ cup milk", "2 tbsp greek yogurt"]
  },
  {
    id: 1002,
    name: "Mango Banana Smoothie",
    category: "smoothie",
    ingredients: ["½ cup mango", "½ banana", "¾ cup milk"]
  },
  {
    id: 1003,
    name: "Green Apple Smoothie",
    category: "smoothie",
    ingredients: ["½ green apple", "¾ cup almond milk", "½ banana", "pinch cinnamon"]
  },
  {
    id: 1004,
    name: "Pineapple Banana Smoothie",
    category: "smoothie",
    ingredients: ["½ cup pineapple", "½ banana", "¾ cup coconut water"]
  },
  {
    id: 1005,
    name: "Strawberry Yogurt Smoothie",
    category: "smoothie",
    ingredients: ["¾ cup strawberries", "½ banana", "¼ cup greek yogurt", "½ cup milk"]
  },
  {
    id: 1006,
    name: "Blueberry Banana Smoothie",
    category: "smoothie",
    ingredients: ["½ cup blueberries", "½ banana", "¾ cup milk", "1 tsp chia"]
  },
  {
    id: 1007,
    name: "Greek Yogurt Berry Protein Smoothie",
    category: "smoothie",
    ingredients: ["½ cup greek yogurt", "½ cup mixed berries", "½ banana", "½ cup milk", "1 tsp chia seeds"]
  },
  {
    id: 1008,
    name: "Banana Peanut Butter Oat Smoothie",
    category: "smoothie",
    ingredients: ["½ banana", "1 tbsp peanut butter", "1 tbsp oats", "¾ cup milk", "pinch cinnamon"]
  },
  {
    id: 1009,
    name: "Strawberry Kefir Chia Smoothie",
    category: "smoothie",
    ingredients: ["½ cup strawberries", "¾ cup plain kefir", "1 tsp chia seeds", "½ banana"]
  },
  {
    id: 10010,
    name: "Chocolate Tahini Yogurt Smoothie",
    category: "smoothie",
    ingredients: ["½ banana", "½ cup milk", "½ cup greek yogurt", "1 tbsp tahini", "1 tsp cocoa powder"]
  },
  {
    id: 10011,
    name: "Banana Chia Breakfast Smoothie",
    category: "smoothie",
    ingredients: ["½ banana", "1 tsp chia", "2 tbsp yogurt", "1 cup milk"]
  },
  {
    id: 10012,
    name: "Berry Flax Breakfast Smoothie",
    category: "smoothie",
    ingredients: ["½ cup berries", "1 tsp ground flax", "½ banana", "¾ cup milk"]
  },
  {
    id: 13,
    name: "Apple Cinnamon Oat Smoothie",
    category: "smoothie",
    ingredients: ["½ green apple", "cinnamon", "1 tbsp oats", "¾ cup milk"]
  },
  {
    id: 1014,
    name: "Banana Matcha Smoothie",
    category: "smoothie",
    ingredients: ["½ banana", "1 tsp Japanese matcha", "1 cup milk"]
  },
  {
    id: 1015,
    name: "Mango Matcha Smoothie",
    category: "smoothie",
    ingredients: ["½ cup mango", "1 tsp matcha", "¾ cup milk"]
  },
  {
    id: 1016,
    name: "Strawberry Matcha Smoothie",
    category: "smoothie",
    ingredients: ["¾ cup strawberries", "1 tsp matcha", "¾ cup milk"]
  },
  {
    id: 1017,
    name: "Watermelon Mint Smoothie",
    category: "smoothie",
    ingredients: ["1 cup watermelon", "4-6 mint leaves", "lime"]
  },
  {
    id: 1018,
    name: "Pineapple Cucumber Smoothie",
    category: "smoothie",
    ingredients: ["½ cup pineapple", "¼ cucumber", "½ cup water"]
  },
  {
    id: 1019,
    name: "Berry Lemon Smoothie",
    category: "smoothie",
    ingredients: ["½ cup berries", "½ banana", "½ cup cold water", "lemon"]
  },
  {
    id: 1020,
    name: "Dragon Fruit Smoothie",
    category: "smoothie",
    ingredients: ["1 cup dragon fruit", "½ cup greek yogurt", "1 banana", "½ cup coconut water", "1 tsp honey"]
  },


  //This section is for juices :)
  {
    id: 2001,
    name: "Watermelon Cucumber Lime Juice",
    category: "juice",
    ingredients: ["3 cups watermelon", "½ cucumber", "2 juiced limes"]
  },
  {
    id: 2002,
    name: "Carrot Orange Ginger Juice",
    category: "juice",
    ingredients: ["3 navel oranges", "4 carrots", "1 tbsp ginger"]
  },
  {
    id: 2003,
    name: "Kiwi Apple Juice",
    category: "juice",
    ingredients: ["2 kiwis", "1 green apple", "½ lemon (juiced)", "½ cup cold water", "1 tsp honey"]
  },
  {
    id: 2004,
    name: "Purple Grape Lemon Juice",
    category: "juice",
    ingredients: ["1 cup purple grapes", "½ lemon (juiced)", "½ cup cold water", "1 tsp honey"]
  },
  {
    id: 2005,
    name: "Peach Orange Juice",
    category: "juice",
    ingredients: ["2 peaches", "2 oranges", "½ lemon (juiced)", "½ cup cold water", "1 tsp honey"]
  },
  {
    id: 2006,
    name: "Tropical Multivitamin Juice",
    category: "juice",
    ingredients: ["1 mango", "1 orange", "½ cup pineapple", "1 kiwi", "1 lemon (juiced)"]
  },
  {
    id: 2007,
    name: "Carrot Mango Juice",
    category: "juice",
    ingredients: ["2 carrots", "1 mango", "½ cup cold water", "1 tsp honey"]
  },
  {
    id: 2008,
    name: "Apple Cherry Juice",
    category: "juice",
    ingredients: ["1 cup cherries", "1 apple", "½ lemon (juiced)", "½ cup cold water", "1 tsp maple syrup"]
  },
  {
    id: 2009,
    name: "Strawberry Pineapple Juice",
    category: "juice",
    ingredients: ["2 cups strawberries", "2 cups pineapple",  "1 cup cold water", "1 tsp honey"]
  },
  {
    id: 2010,
    name: "Dragon Fruit Juice",
    category: "juice",
    ingredients: ["2 cups dragon fruit", "1 tbsp lime juice", "2 tsp honey", "6 mint leaves", "½ cup cold water"]
  },
  {
    id: 2011,
    name: "Mango Pieapple Juice",
    category: "juice",
    ingredients: ["1 cup mango", "1 cup pineapple", "½ banana", "1 cup coconut water"]
  },
  {
    id: 2012,
    name: "Strawberry Watermelon Juice",
    category: "juice",
    ingredients: ["2 cups watermelon", "2 cups strawberries", "1 lemon (juiced)"]
  },


  //This section is for milkshakes :)
  {
    id: 3001,
    name: "Vanilla Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk"]
  },
  {
    id: 3002,
    name: "Banana Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk", "1 banana"]
  },
  {
    id: 3003,
    name: "Peanut Butter Banana Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk", "1 banana", "1 tbsp peanut butter"]
  },
  {
    id: 3004,
    name: "Strawberry Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk", "¾ cup strawberries"]
  },
  {
    id: 3005,
    name: "Strawberry Banana Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk", "¾ cup strawberries", "1 banana"]
  },
  {
    id: 3006,
    name: "Oreo Milkshake",
    category: "milkshake",
    ingredients: ["1½ cups vanilla ice cream", "½ cup milk", "4 Oreo cookies"]
  },
  {
    id: 3007,
    name: "Creamy Peach Milkshake",
    category: "milkshake",
    ingredients: ["2 cups vanilla ice cream", "2 peaches", "½ cup milk"]
  },
  {
    id: 3008,
    name: "Tropical Sunrise Smoothie Shake",
    category: "milkshake",
    ingredients: ["1 banana", "1 cup mango", "1 cup pineapple", "1 cup milk", "½ cup greek yogurt", "1 tbsp honey"]
  },
  {
    id: 3009,
    name: "Cinnamon Maple Apple Pie Shake",
    category: "milkshake",
    ingredients: ["2 scoops vanilla ice cream", "1 cup milk", "1 apple", "½ tsp cinnamon", "2 tbsp maple syrup"]
  },
  {
    id: 3010,
    name: "Matcha Green Tea Delight Shake",
    category: "milkshake",
    ingredients: ["1 tsp matcha green tea powder", "1 cup milk", "2 scoops vanilla ice cream", "1 tsp honey"]
  },
  {
    id: 3011,
    name: "Caramelized Banana Crunch Shake",
    category: "milkshake",
    ingredients: ["2 bananaa", "2 tbsp unsalted butter", "2 tbsp brown sugar", "1 cup milk", "2 scoops vanilla ice cream", "1 tsp vanilla extract"]
  },
  {
    id: 3012,
    name: "Pistachio Rose Dream Shake",
    category: "milkshake",
    ingredients: ["2 scoops vanilla ice cream", "1 cup milk", "1 tsp rose water", "½ cup shelled pistachios (unsalted)", "1 tsp honey"]
  },
  {
    id: 3013,
    name: "Salted Caramel Pretzel Shake",
    category: "milkshake",
    ingredients: ["2 scoops vanilla ice cream", "1 cup milk", "1 tbsp caramel syrup", "¼ cup crushed pretzels", "1 tsp sea salt"]
  },
  {
    id: 3014,
    name: "Sweet and Spicy Mango Tango Shake",
    category: "milkshake",
    ingredients: ["1 mango", "1 cup milk", "2 scoops vanilla ice cream", "½ teaspoon chili powder", "1 tbsp lime juice", "1 tbsp honey"]
  },
  {
    id: 3015,
    name: "Cookies and Cream Dream Shake",
    category: "milkshake",
    ingredients: ["2 cups vanilla ice cream", "1 cup milk", "8 orea cookies", "1 tsp vanilla extract"]
  },
  {
    id: 3016,
    name: "Choco-Banana Protein Shake",
    category: "milkshake",
    ingredients: ["1 banana", "1 cup milk", "1 scoop chocolate protein powder", "1 cup unsweetened almond milk", "2 tbsp peanut butter", "1 tsp cocoa powder", "1 tsp honey"]
  },


  //This section is for tea :)
  {
    id: 4001,
    name: "Iced Honeydew Mint Tea",
    category: "tea",
    ingredients: ["4 cups water", "24 fresh mint leaves", "8 green tea bags", "2/3 cup sugar", "5 cups diced honeydew melon", "3 cups ice cubes"]
  },
  {
    id: 4002,
    name: "Bella Basil Raspberry Tea",
    category: "tea",
    ingredients: ["3 cups fresh raspberries", "1 cup sugar", "1 cup packed fresh basil leaves", "1/4 cup lime juice", "2 black tea bags", "1 bottle carbonated water"]
  },
  {
    id: 4003,
    name: "Refreshing Raspberry Iced Tea",
    category: "tea",
    ingredients: ["6 cups water", "1-3/4 cups sugar", "8 tea bags", "3/4 cup frozen apple-raspberry juice concentrate", "8 cups cold water", "Fresh raspberries"]
  },
  {
    id: 4004,
    name: "Smooth Sweet Tea",
    category: "tea",
    ingredients: ["2 cups water", "6 black tea bags", "1/8 teaspoon baking soda", "2/3 cup sugar", "6 cups cold water"]
  },
  {
    id: 4005,
    name: "Lemon Basil Tea",
    category: "tea",
    ingredients: ["3 quarts water", "1 cup thinly sliced fresh basil leaves", "1/4 cup grated lemon zest", "1/4 cup black tea leaves"]
  },


  //This section is for coffee :)


  //This section is for lemonades :)


];