import {
  Images,
  Search,
  Users,
  Copy,
} from "lucide-react";

import StatCard from "@/components/common/stat-card";
import PageHeader from "@/components/common/page-header";

export default function DashboardStats() {
  const stats = [
    {
      icon: Images,
      value: "100K+",
      label: "Photos Managed",
    },
    {
      icon: Search,
      value: "<1 sec",
      label: "Average AI Search",
    },
    {
      icon: Users,
      value: "248",
      label: "Faces Identified",
    },
    {
      icon: Copy,
      value: "37",
      label: "Duplicate Photos",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          title="Powerful AI Insights"
          description="Everything you need to organize thousands of photos in seconds."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}