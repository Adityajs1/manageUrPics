import {
  Search,
  Images,
  Users,
  Sparkles,
  FileText,
  Copy,
} from "lucide-react";

import PageHeader from "@/components/common/page-header";

export default function DashboardHero() {
  const features = [
    {
      icon: Search,
      title: "AI Search",
      description: "Find photos using natural language.",
    },
    {
      icon: Users,
      title: "Face Recognition",
      description: "Automatically group people together.",
    },
    {
      icon: Copy,
      title: "Duplicate Detection",
      description: "Remove duplicate images instantly.",
    },
    {
      icon: FileText,
      title: "OCR Extraction",
      description: "Extract text from receipts and documents.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          title="A Smarter Way to Organize Photos"
          description="Snapic combines computer vision and AI to organize your memories automatically, making them searchable and easy to manage."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10"
                >
                  <div className="rounded-xl bg-violet-600 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                Dashboard Preview
              </h3>

              <Sparkles className="h-6 w-6 text-violet-300" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Images className="text-violet-300" />
                  <span className="text-white">12,845 Photos</span>
                </div>

                <span className="text-green-400">Synced</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Search className="text-violet-300" />
                  <span className="text-white">AI Search Ready</span>
                </div>

                <span className="text-green-400">Enabled</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Users className="text-violet-300" />
                  <span className="text-white">Faces Grouped</span>
                </div>

                <span className="text-green-400">248</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Copy className="text-violet-300" />
                  <span className="text-white">Duplicates Found</span>
                </div>

                <span className="text-yellow-400">37</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}