import PersonCard from "./person-card";

const people = [
  {
    id: 1,
    name: "Person 1",
    photos: 18,
  },
  {
    id: 2,
    name: "Person 2",
    photos: 11,
  },
  {
    id: 3,
    name: "Person 3",
    photos: 27,
  },
  {
    id: 4,
    name: "Unknown",
    photos: 8,
  },
];

export default function PeopleGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {people.map((person) => (
        <PersonCard
          key={person.id}
          {...person}
        />
      ))}
    </div>
  );
}