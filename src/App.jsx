import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter text-neutral-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
