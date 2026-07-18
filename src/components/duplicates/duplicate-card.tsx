import { Copy } from "lucide-react";

interface DuplicateCardProps {
  group: number;
  similarity: string;
}

export default function DuplicateCard({
  group,
  similarity,
}: DuplicateCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-3">
          <Copy className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h2 className="font-semibold">
            Duplicate Group #{group}
          </h2>

          <p className="text-sm text-muted-foreground">
            Similarity: {similarity}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square rounded-xl border bg-muted" />
        <div className="aspect-square rounded-xl border bg-muted" />
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg border py-2 transition hover:bg-muted">
          Keep Left
        </button>

        <button className="flex-1 rounded-lg bg-destructive py-2 text-destructive-foreground transition hover:opacity-90">
          Delete Right
        </button>
      </div>
    </div>
  );
}