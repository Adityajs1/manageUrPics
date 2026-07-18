"use client";

import Image from "next/image";

interface UploadPreviewProps {
  files: File[];
}

export default function UploadPreview({
  files,
}: UploadPreviewProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="mb-4 text-lg font-semibold">
        Selected Images ({files.length})
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border"
          >
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={300}
              height={300}
              className="h-40 w-full object-cover"
            />

            <div className="p-2 text-xs truncate">
              {file.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}