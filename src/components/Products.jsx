import { motion } from "framer-motion";
import { Check, Shield, Truck } from "lucide-react";

const items = [
  {
    name: "Kaju Katli (Cashew Fudge)",
    price: 14.99,
    img:
      "https://images.unsplash.com/photo-1622445275463-afa513c06e48?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Anjeer Rolls (Fig & Nuts)",
    price: 16.5,
    img:
      "https://images.unsplash.com/photo-1625268439352-9cc4e2516ec4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Badam Pista Bites",
    price: 15.25,
    img:
      "https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Dry Fruit Laddu",
    price: 12.75,
    img:
      "https://images.unsplash.com/photo-1588166524941-3bf62b4bd6c0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Premium Nut Mix",
    price: 18.0,
    img:
      "https://images.unsplash.com/photo-1603079842350-7b5833f44f82?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Pista Barfi",
    price: 15.99,
    img:
      "https://images.unsplash.com/photo-1641426276534-e7cd8a463e80?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Our Bestsellers
          </h2>
          <p className="mt-3 text-neutral-600">
            Crafted in small batches with premium nuts and natural ingredients.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-neutral-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500">Freshly prepared on order</p>
                  </div>
                  <p className="font-semibold text-amber-700">${item.price.toFixed(2)}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
                  <Check className="h-4 w-4 text-emerald-600" />
                  100% vegetarian
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-4 py-2 text-sm font-medium transition">
                  Enquire / Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-700" /> Quality guarantee
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-amber-700" /> Fast local delivery
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-amber-700" /> No preservatives
          </div>
        </div>
      </div>
    </section>
  );
}
