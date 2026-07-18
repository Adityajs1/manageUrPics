import Link from "next/link";
import { UserRound } from "lucide-react";

interface PersonCardProps {
  id: number;
  name: string;
  photos: number;
}

export default function PersonCard({
  id,
  name,
  photos,
}: PersonCardProps) {
  return (
    <Link href={`/search?person=${id}`}>
      <div className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <UserRound className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mt-6 text-center text-xl font-semibold">
          {name}
        </h2>

        <p className="mt-2 text-center text-sm text-muted-foreground">
          {photos} Photos
        </p>
      </div>
    </Link>
  );
}