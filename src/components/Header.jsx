import { useState } from "react";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown, X } from "lucide-react";

function LoginModal({ open, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sign in</h3>
          <button onClick={onClose} className="rounded p-1 hover:bg-neutral-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-amber-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-amber-600"
          />
          <button
            onClick={() => {
              onLogin({ name: email.split("@")[0] || "Guest" });
              onClose();
            }}
            className="w-full rounded-md bg-amber-600 px-4 py-2 font-medium text-white hover:bg-amber-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, items, onRemove }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">Your Cart ({items.length})</h3>
          <button onClick={onClose} className="rounded p-1 hover:bg-neutral-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex h-[calc(100%-64px)] flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-sm text-neutral-600">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="h-14 w-14 rounded object-cover" />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-amber-700">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(idx)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t p-4">
            <button
              disabled={items.length === 0}
              className="w-full rounded-md bg-amber-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ user, onLogin, onLogout, cartItems, search, setSearch, onRemoveCartItem }) {
  const [showLogin, setShowLogin] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="flex items-center gap-3 bg-neutral-900 px-4 py-2 text-white md:gap-4 md:px-6">
        <button className="flex items-center gap-2 text-left">
          <Menu className="h-6 w-6 md:hidden" />
          <div className="font-semibold">DryFruit Hub</div>
        </button>
        <div className="hidden items-center gap-1 text-sm md:flex">
          <MapPin className="h-4 w-4" />
          <span>Deliver to</span>
          <span className="font-medium">All India</span>
        </div>
        <div className="relative ml-auto flex w-full max-w-3xl items-center overflow-hidden rounded-md bg-white text-neutral-900">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for dry fruit sweets, gift boxes, mixes..."
            className="w-full border-0 px-3 py-2 text-sm outline-none"
          />
          <button className="flex h-full items-center justify-center bg-amber-600 px-3 py-2 text-white hover:bg-amber-700">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <button
          onClick={() => (user ? onLogout() : setShowLogin(true))}
          className="hidden flex-col text-left text-xs md:flex"
        >
          <span className="text-neutral-300">Hello, {user ? user.name : "sign in"}</span>
          <span className="flex items-center gap-1 font-semibold">
            Account & Lists <ChevronDown className="h-3 w-3" />
          </span>
        </button>
        <button className="hidden flex-col text-left text-xs md:flex">
          <span className="text-neutral-300">Returns</span>
          <span className="font-semibold">& Orders</span>
        </button>
        <button onClick={() => setOpenCart(true)} className="relative ml-2 flex items-center gap-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="hidden text-sm font-semibold md:block">Cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-amber-500 px-1.5 text-xs font-bold text-black">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
      <div className="flex items-center gap-4 bg-neutral-800 px-4 py-2 text-sm text-neutral-100 md:px-6">
        <span className="flex items-center gap-2"><Menu className="h-5 w-5" /> All</span>
        <span className="hidden md:block">Best Sellers</span>
        <span className="hidden md:block">Deals</span>
        <span className="hidden md:block">Gifts</span>
        <span className="hidden md:block">Sweets</span>
        <span className="hidden md:block">Mixes</span>
      </div>

      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} onLogin={onLogin} />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} items={cartItems} onRemove={onRemoveCartItem} />
    </header>
  );
}
