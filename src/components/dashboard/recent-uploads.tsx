import {
  ImageIcon,
  FileText,
  User,
  Mountain,
} from "lucide-react";

import PageHeader from "@/components/common/page-header";

const uploads = [
  {
    name: "Vacation.jpg",
    type: "Travel",
    status: "AI Tagged",
    icon: Mountain,
  },
  {
    name: "Family.png",
    type: "People",
    status: "Face Grouped",
    icon: User,
  },
  {
    name: "Invoice.pdf",
    type: "Document",
    status: "OCR Ready",
    icon: FileText,
  },
  {
    name: "Dog.png",
    type: "Pets",
    status: "AI Tagged",
    icon: ImageIcon,
  },
];

export default function RecentUploads() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          title="Recent Uploads"
          description="Every uploaded image is automatically analyzed, categorized, and indexed for lightning-fast search."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uploads.map((upload) => {
            const Icon = upload.icon;

            return (
              <div
                key={upload.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/70 to-fuchsia-600/70">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {upload.name}
                </h3>

                <p className="mt-2 text-white/60">
                  {upload.type}
                </p>

                <span className="mt-5 inline-block rounded-full bg-violet-600/20 px-4 py-2 text-sm text-violet-200">
                  {upload.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}