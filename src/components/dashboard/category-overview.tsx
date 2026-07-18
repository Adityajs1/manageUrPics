import {
  FileText,
  Users,
  Mountain,
  Dog,
  Receipt,
  Camera,
} from "lucide-react";

import PageHeader from "@/components/common/page-header";

const categories = [
  {
    title: "Documents",
    count: "324",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "People",
    count: "248",
    icon: Users,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Travel",
    count: "519",
    icon: Mountain,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Pets",
    count: "91",
    icon: Dog,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Receipts",
    count: "67",
    icon: Receipt,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Others",
    count: "120",
    icon: Camera,
    color: "from-slate-500 to-gray-600",
  },
];

export default function CategoryOverview() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          title="AI Categorized Collections"
          description="Snapic automatically groups your photos into meaningful collections, making organization effortless."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color}`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-white/60">
                  {category.count} files
                </p>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-500 group-hover:w-full`}
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}