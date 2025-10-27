import { ShoppingBag, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-rose-400 flex items-center justify-center shadow-inner">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Royal Bites</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#products" className="hover:text-neutral-900 transition">Products</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm shadow-sm transition"
          >
            <Phone className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
