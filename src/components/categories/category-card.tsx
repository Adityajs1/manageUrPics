import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: number;
}

export default function CategoryCard({
  title,
  description,
  icon: Icon,
  count,
}: CategoryCardProps) {
  return (
    <Link href={`/search?category=${title.toLowerCase()}`}>
      <div className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        <h2 className="mt-5 text-xl font-semibold">{title}</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>

        <p className="mt-6 text-sm font-medium text-primary">
          {count} Images
        </p>
      </div>
    </Link>
  );
}