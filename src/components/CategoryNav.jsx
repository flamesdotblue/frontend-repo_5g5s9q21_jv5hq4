export default function CategoryNav({ categories, current, onSelect }) {
  return (
    <nav className="no-scrollbar sticky top-[88px] z-20 w-full overflow-x-auto border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <ul className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 text-sm md:gap-6 md:px-6">
        {categories.map((cat) => (
          <li key={cat}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 transition ${
                current === cat ? "bg-amber-600 text-white" : "bg-neutral-100 hover:bg-neutral-200"
              }`}
              onClick={() => onSelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
}
