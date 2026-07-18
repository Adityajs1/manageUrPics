import Layout from "@/components/layout/layout";
import CategoryGrid from "@/components/categories/category-grid";

export default function CategoriesPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Categories
          </h1>

          <p className="mt-4 text-muted-foreground">
            Browse your photos by automatically detected categories.
            Snapic uses AI to organize your images into meaningful groups.
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>
    </Layout>
  );
}