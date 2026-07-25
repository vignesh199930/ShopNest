function CategoryFilter({ category, setCategory }) {
  const categories = ["All", "Mobiles", "Laptops", "Shoes", "Watches"];

  return (
    <div className="container mt-4">
      {categories.map((item) => (
        <button
          key={item}
          className={`btn me-2 ${
            category === item ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;