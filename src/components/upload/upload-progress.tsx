interface UploadProgressProps {
  progress: number;
}

export default function UploadProgress({
  progress,
}: UploadProgressProps) {
  if (progress === 0) return null;

  return (
    <div className="mt-8">
      <div className="mb-2 flex justify-between text-sm">
        <span>Uploading...</span>
        <span>{progress}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}