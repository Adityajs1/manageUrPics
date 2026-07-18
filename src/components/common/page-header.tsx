interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export default function PageHeader({
  title,
  description,
  centered = true,
}: PageHeaderProps) {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70">
          {description}
        </p>
      )}
    </div>
  );
}