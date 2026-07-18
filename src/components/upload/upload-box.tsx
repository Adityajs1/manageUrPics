"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import UploadPreview from "./upload-preview";
import UploadProgress from "./upload-progress";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [progress] = useState(0);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles).filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-8 shadow-sm">
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div className="flex flex-col items-center justify-center text-center">
        <UploadCloud className="h-14 w-14 text-primary" />

        <h2 className="mt-5 text-2xl font-semibold">
          Drag & Drop Images
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Select one or multiple images from your device.
        </p>

        <button
          onClick={() => inputRef.current?.click()}
          className="mt-6 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
        >
          Browse Images
        </button>
      </div>

      <UploadProgress progress={progress} />

      <UploadPreview files={files} />
    </div>
  );
}