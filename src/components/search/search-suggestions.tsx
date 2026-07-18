const suggestions = [
  "Receipts",
  "Travel",
  "Pets",
  "People",
  "Documents",
  "Prescriptions",
  "Beach",
  "Mountains",
];

export default function SearchSuggestions() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">
        Suggested Searches
      </h2>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            className="rounded-full border px-4 py-2 text-sm transition hover:bg-primary hover:text-primary-foreground"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}