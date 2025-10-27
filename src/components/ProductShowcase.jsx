import { motion } from "framer-motion";

const products = [
  {
    name: "Kaju Katli Deluxe",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1600&auto=format&fit=crop",
    price: 16.99,
    badge: "Best Seller",
  },
  {
    name: "Anjeer Roll",
    image:
      "https://images.unsplash.com/photo-1586201375754-1421e0aa2b66?q=80&w=1600&auto=format&fit=crop",
    price: 14.5,
    badge: "No Added Sugar",
  },
  {
    name: "Pista Burfi",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08f?q=80&w=1600&auto=format&fit=crop",
    price: 17.25,
  },
  {
    name: "Dry Fruit Ladoo",
    image:
      "https://images.unsplash.com/photo-1590845947670-c009801ffa74?q=80&w=1600&auto=format&fit=crop",
    price: 12.0,
    badge: "New",
  },
  {
    name: "Premium Mixed Nuts",
    image:
      "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1600&auto=format&fit=crop",
    price: 19.99,
  },
  {
    name: "Saffron Almond Brittle",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1600&auto=format&fit=crop",
    price: 15.75,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Our Signature Collection
            </h2>
            <p className="mt-1 text-neutral-600">
              Curated with the finest nuts and ingredients, made fresh in small batches.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 px-4 py-2 text-sm font-medium shadow-sm transition"
          >
            Bulk Orders & Gifting
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-medium text-amber-700 border border-amber-200 shadow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-neutral-900">{p.name}</h3>
                  <span className="text-amber-700 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <button className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition">
                  Add to Cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
