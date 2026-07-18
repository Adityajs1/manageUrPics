import EmptyState from "@/components/common/empty-state";

export default function SearchResults() {
  return (
    <div className="mt-10">
      <EmptyState
        title="No Search Performed"
        description="Search results will appear here once you search your images."
      />
    </div>
  );
}