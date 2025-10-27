import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,237,213,0.6),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(254,215,170,0.5),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(253,164,175,0.5),transparent_40%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-amber-200 px-3 py-1 text-amber-700 text-xs font-medium shadow-sm"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              Handmade Dry Fruit Sweets • Premium Quality
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900"
            >
              Indulge in Royal Taste, Crafted with the Finest Nuts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-4 text-lg text-neutral-600"
            >
              Discover melt-in-mouth sweets and artisanal mixes made with premium almonds,
              pistachios, cashews, figs, and saffron. Freshly prepared and delivered with care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-sm font-medium shadow-sm transition"
              >
                Shop Bestsellers
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 px-6 py-3 text-sm font-medium shadow-sm transition"
              >
                Our Craft
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1668236543098-bccfb3d096e2?q=80&w=1600&auto=format&fit=crop"
                alt="Assorted dry fruit sweets and premium nuts"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-4 shadow-lg ring-1 ring-black/5">
                <p className="text-sm font-medium text-neutral-800">100% Pure Ingredients</p>
                <p className="text-xs text-neutral-500">No artificial colors or preservatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
