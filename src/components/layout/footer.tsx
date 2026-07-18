export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-white/70 md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Snapic. All rights reserved.
        </p>

        <p className="text-sm">
          Built with Next.js • FastAPI • OpenCLIP • InsightFace
        </p>
      </div>
    </footer>
  );
}