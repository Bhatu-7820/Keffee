// KAFFA COFFEE ROASTER Menu Data
// Note: Prices and items are customizable placeholders for easy updates.

export const MENU_CATEGORIES = [
  { id: "all", name: "All Items" },
  { id: "coffee", name: "Hot Coffee" },
  { id: "cold-coffee", name: "Cold Coffee" },
  { id: "tea", name: "Artisanal Tea" },
  { id: "snacks", name: "Café Snacks" },
  { id: "desserts", name: "Desserts" },
];

export const MENU_ITEMS = [
  {
    id: "item-1",
    category: "coffee",
    name: "Signature Espresso Shot",
    description: "Rich and concentrated shot with golden crema, highlighting sweet and complex roasted coffee notes.",
    price: "₹ --- (Editable Price)",
    image: "/images/hero.jpg",
    badge: "House Specialty",
    popular: true
  },
  {
    id: "item-2",
    category: "coffee",
    name: "Artisan Cappuccino",
    description: "Silky steamed milk poured delicately over double espresso with hand-crafted latte art.",
    price: "₹ --- (Editable Price)",
    image: "/images/latte-art.jpg",
    badge: "Popular",
    popular: true
  },
  {
    id: "item-3",
    category: "coffee",
    name: "V60 Pour Over Coffee",
    description: "Slow-brewed single origin coffee filtered to deliver clean, crisp, floral notes.",
    price: "₹ --- (Editable Price)",
    image: "/images/pourover-barista.jpg",
    badge: "Roaster Special"
  },
  {
    id: "item-4",
    category: "cold-coffee",
    name: "Slow-Steeped Cold Brew",
    description: "Steeped for 18 hours for smooth, naturally sweet, low-acidity coffee served over crystal ice.",
    price: "₹ --- (Editable Price)",
    image: "/images/cold-brew.jpg",
    badge: "Refreshing",
    popular: true
  },
  {
    id: "item-5",
    category: "cold-coffee",
    name: "Iced Caramel Macchiato",
    description: "Chilled milk infused with sweet vanilla, layered with espresso and golden caramel drizzle.",
    price: "₹ --- (Editable Price)",
    image: "/images/cold-brew.jpg",
    badge: "Customer Favorite"
  },
  {
    id: "item-6",
    category: "tea",
    name: "Aromatic Herbal Tea",
    description: "Fragrant loose-leaf chamomile and mint blend served with natural spices and honey.",
    price: "₹ --- (Editable Price)",
    image: "/images/specialty-tea.jpg",
    badge: "Calming"
  },
  {
    id: "item-7",
    category: "snacks",
    name: "Fresh Baked Croissant",
    description: "Flaky, buttery French-style pastry baked fresh for a perfect coffee pairing.",
    price: "₹ --- (Editable Price)",
    image: "/images/pastry-dessert.jpg",
    badge: "Freshly Baked"
  },
  {
    id: "item-8",
    category: "desserts",
    name: "Espresso Tiramisu Slice",
    description: "Classic Italian dessert layered with rich mascarpone cheese and soaked in Kaffa espresso.",
    price: "₹ --- (Editable Price)",
    image: "/images/pastry-dessert.jpg",
    badge: "Chef's Treat",
    popular: true
  }
];
