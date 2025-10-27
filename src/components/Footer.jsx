import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Royal Bites</h3>
            <p className="mt-2 text-neutral-600">
              Handcrafted dry fruit sweets, nut mixes, and artisanal treats. Premium
              ingredients, small-batch freshness.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (234) 567-8901</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@royalbites.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Follow us</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Royal Bites. All rights reserved.</p>
          <p>Crafted with care in our kitchen.</p>
        </div>
      </div>
    </footer>
  );
}
