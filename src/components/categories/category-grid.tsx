import {
  FileText,
  Receipt,
  Pill,
  Plane,
  Dog,
  Users,
  Image,
} from "lucide-react";

import CategoryCard from "./category-card";

const categories = [
  {
    title: "Documents",
    description: "Contracts, IDs, certificates and other important documents.",
    icon: FileText,
    count: 0,
  },
  {
    title: "Receipts",
    description: "Bills, invoices and payment receipts.",
    icon: Receipt,
    count: 0,
  },
  {
    title: "Prescriptions",
    description: "Medical prescriptions and healthcare documents.",
    icon: Pill,
    count: 0,
  },
  {
    title: "Travel",
    description: "Trips, vacations and memorable journeys.",
    icon: Plane,
    count: 0,
  },
  {
    title: "Pets",
    description: "Dogs, cats and your favorite furry friends.",
    icon: Dog,
    count: 0,
  },
  {
    title: "People",
    description: "Photos grouped by detected faces.",
    icon: Users,
    count: 0,
  },
  {
    title: "Others",
    description: "Images that don't belong to a specific category.",
    icon: Image,
    count: 0,
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          {...category}
        />
      ))}
    </div>
  );
}