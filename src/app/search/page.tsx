import Layout from "@/components/layout/layout";
import SearchBar from "@/components/search/search-bar";
import SearchSuggestions from "@/components/search/search-suggestions";
import SearchResults from "@/components/search/search-results";

export default function SearchPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Image Search
          </h1>

          <p className="mt-4 text-muted-foreground">
            Search your photos using natural language.
            Find receipts, pets, travel photos, people,
            prescriptions, documents, and much more.
          </p>

          <div className="mt-10 space-y-8">
            <SearchBar />

            <SearchSuggestions />

            <SearchResults />
          </div>
        </div>
      </section>
    </Layout>
  );
}