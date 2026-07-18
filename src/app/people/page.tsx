import Layout from "@/components/layout/layout";
import PeopleGrid from "@/components/people/people-grid";

export default function PeoplePage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            People
          </h1>

          <p className="mt-4 text-muted-foreground">
            Browse photos grouped by detected faces. Snapic automatically
            identifies and clusters similar faces into people albums.
          </p>
        </div>

        <div className="mt-10">
          <PeopleGrid />
        </div>
      </section>
    </Layout>
  );
}