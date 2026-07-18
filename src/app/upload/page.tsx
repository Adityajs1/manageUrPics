import Layout from "@/components/layout/layout";
import UploadBox from "@/components/upload/upload-box";

export default function UploadPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Upload Your Images
          </h1>

          <p className="mt-4 text-muted-foreground">
            Upload images from your local storage to organize them using AI.
            Snapic automatically detects duplicates, groups people, extracts
            text, categorizes photos, and enables natural language search.
          </p>
        </div>

        <div className="mt-12">
          <UploadBox />
        </div>
      </section>
    </Layout>
  );
}