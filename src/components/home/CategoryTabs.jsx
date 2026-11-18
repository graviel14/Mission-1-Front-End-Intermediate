export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={active === cat}
          className={`tabs__tab${active === cat ? " is-active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
