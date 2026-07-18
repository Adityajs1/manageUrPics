import Layout from "@/components/layout/layout";
import Hero from "@/components/layout/hero";
import DashboardHero from "@/components/dashboard/dashboard-hero";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import RecentUploads from "@/components/dashboard/recent-uploads";
import CategoryOverview from "@/components/dashboard/category-overview";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <DashboardHero />
      <DashboardStats />
      <RecentUploads />
      <CategoryOverview />
    </Layout>
  );
}