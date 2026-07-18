import DuplicateCard from "./duplicate-card";

const groups = [
  {
    group: 1,
    similarity: "100%",
  },
  {
    group: 2,
    similarity: "98%",
  },
  {
    group: 3,
    similarity: "95%",
  },
];

export default function DuplicateGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {groups.map((item) => (
        <DuplicateCard
          key={item.group}
          {...item}
        />
      ))}
    </div>
  );
}