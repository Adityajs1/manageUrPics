import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function StatCard({
  icon: Icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-white/70">
        {label}
      </p>
    </div>
  );
}