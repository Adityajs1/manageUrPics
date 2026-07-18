import Layout from "@/components/layout/layout";
import DuplicateGrid from "@/components/duplicates/duplicate-grid";

export default function DuplicatesPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Duplicate Detection
          </h1>

          <p className="mt-4 text-muted-foreground">
            Snapic automatically detects exact and near-duplicate images,
            helping you free storage and keep your photo library organized.
          </p>
        </div>

        <div className="mt-10">
          <DuplicateGrid />
        </div>
      </section>
    </Layout>
  );
}