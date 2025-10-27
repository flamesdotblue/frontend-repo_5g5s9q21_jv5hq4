import { useMemo } from "react";
import { Star, Shield, Truck, Check } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Almond Brittle",
    category: "Sweets",
    price: 12.99,
    rating: 4.7,
    features: ["Roasted almonds", "Jaggery sweetened", "Crunchy texture"],
    image:
      "https://images.unsplash.com/photo-1615486364201-1b1b2eb2a873?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Kaju Katli Supreme",
    category: "Sweets",
    price: 14.99,
    rating: 4.8,
    features: ["100% cashews", "Silver varq free", "Melt-in-mouth"],
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pistachio Rose Bark",
    category: "Gifts",
    price: 16.49,
    rating: 4.6,
    features: ["Real rose petals", "Premium pista", "Handcrafted"],
    image:
      "https://images.unsplash.com/photo-1543205089-8194b2d03d5b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Royal Dry Fruit Mix",
    category: "Mixes",
    price: 11.49,
    rating: 4.5,
    features: ["7 nut blend", "No preservatives", "High protein"],
    image:
      "https://images.unsplash.com/photo-1605972622361-3b5365f26413?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Saffron Soan Papdi",
    category: "Sweets",
    price: 9.99,
    rating: 4.3,
    features: ["Saffron infused", "Ghee rich", "Flaky layers"],
    image:
      "https://images.unsplash.com/photo-1638176069252-9cff4ea5b8c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Deluxe Gift Hamper",
    category: "Gifts",
    price: 24.99,
    rating: 4.9,
    features: ["Assorted sweets", "Reusable box", "Perfect for festivals"],
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c03be0f227?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductGrid({ search, category, onAddToCart }) {
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesTerm = term
        ? p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.features.join(" ").toLowerCase().includes(term)
        : true;
      const matchesCat = category === "All" ? true : p.category === category;
      return matchesTerm && matchesCat;
    });
  }, [search, category]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      {/* Deals banner */}
      <div className="mb-6 rounded-lg bg-gradient-to-r from-amber-100 via-amber-50 to-white p-4 ring-1 ring-amber-200">
        <p className="text-sm font-medium text-amber-900">
          Festive Deals: Up to 30% off on gift hampers + free shipping above $20
        </p>
      </div>

      {/* Quality badges */}
      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <Shield className="h-5 w-5 text-amber-600" />
          <p className="text-sm"><span className="font-semibold">Premium Quality</span> ingredients, lab-tested</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <Truck className="h-5 w-5 text-amber-600" />
          <p className="text-sm"><span className="font-semibold">Fast Delivery</span> nationwide</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <Check className="h-5 w-5 text-amber-600" />
          <p className="text-sm"><span className="font-semibold">No Preservatives</span> or artificial colors</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.id} className="group flex flex-col overflow-hidden rounded-lg border bg-white transition hover:shadow-lg">
            <div className="relative">
              <img src={p.image} alt={p.name} className="h-56 w-full object-cover" />
              <div className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-amber-700 shadow">
                {p.category}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="line-clamp-2 text-sm font-semibold text-neutral-900">{p.name}</h3>
              <div className="flex items-center gap-1 text-amber-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-amber-500 text-amber-500" : "text-amber-300"}`} />
                ))}
                <span className="ml-2 text-xs text-neutral-600">{p.rating.toFixed(1)}</span>
              </div>
              <div className="text-lg font-bold text-neutral-900">${p.price.toFixed(2)}</div>
              <ul className="mt-1 space-y-1 text-xs text-neutral-600">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-3">
                <button
                  onClick={() => onAddToCart(p)}
                  className="w-full rounded-md bg-amber-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-neutral-600">No products match your search.</div>
      )}
    </section>
  );
}
