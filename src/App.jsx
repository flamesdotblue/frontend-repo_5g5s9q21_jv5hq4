import { useState, useCallback } from "react";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const handleAddToCart = useCallback((item) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const handleRemoveFromCart = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const categories = ["All", "Sweets", "Mixes", "Gifts"];

  return (
    <div className="min-h-screen bg-neutral-50 font-inter text-neutral-900">
      <Header
        user={user}
        onLogin={setUser}
        onLogout={() => setUser(null)}
        cartItems={cart}
        search={search}
        setSearch={setSearch}
        onRemoveCartItem={handleRemoveFromCart}
      />

      <CategoryNav categories={categories} current={category} onSelect={setCategory} />

      <main className="pb-16 pt-4">
        <ProductGrid search={search} category={category} onAddToCart={handleAddToCart} />
      </main>

      <Footer />
    </div>
  );
}
