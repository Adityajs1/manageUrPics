import Link from "next/link";

const features = [
  "Natural Language Search",
  "Duplicate Detection",
  "Face Grouping",
  "OCR Documents",
];

const stats = [
  {
    value: "100K+",
    label: "Photos Supported",
  },
  {
    value: "< 1s",
    label: "AI Search",
  },
  {
    value: "99%",
    label: "Duplicate Detection",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Organize Every Memory
          <br />
          <span className="bg-gradient-to-r from-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
            With Snapic AI
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
          Search your photos using natural language, detect duplicate images,
          automatically group faces, categorize memories, and rediscover your
          entire photo collection using AI.
        </p>

        {/* Feature Pills */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/upload"
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
          >
            Upload Images
          </Link>

          <Link
            href="/search"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            Explore Features
          </Link>
        </div>

        {/* Stats */}

        <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1"
            >
              <h2 className="text-4xl font-bold text-white">
                {stat.value}
              </h2>

              <p className="mt-3 text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}