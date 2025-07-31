import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { UseFormRegister, FieldError } from "react-hook-form";
import type { JobApplicationFormSchema } from "../schemas/jobApplicationFormSchema";

interface FileUploadFieldProps {
  register: UseFormRegister<JobApplicationFormSchema>;
  error?: FieldError | FieldError[];
  onFileChange?: (file: File | null) => void;
}

export default function FileUploadField({
  register,
  error,
  onFileChange,
}: FileUploadFieldProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (validTypes.includes(file.type)) {
      setFileName(file.name);
      // Manually set the file in the input
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;

        // Trigger change event for react-hook-form
        const event = new Event("change", { bubbles: true });
        fileInputRef.current.dispatchEvent(event);
      }
      onFileChange?.(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileChange?.(file);
    }
  };

  const handleRemoveFile = () => {
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      // Trigger change event for react-hook-form
      const event = new Event("change", { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
    onFileChange?.(null);
  };

  const errorMessage = Array.isArray(error)
    ? error[0]?.message
    : error?.message;

  const getFileIcon = () => {
    if (!fileName) return null;

    const extension = fileName.split(".").pop()?.toLowerCase();

    if (extension === "pdf") {
      return (
        <svg
          className="w-5 h-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 18h12a2 2 0 002-2V6.414A2 2 0 0017.414 5L14 1.586A2 2 0 0012.586 1H4a2 2 0 00-2 2v13a2 2 0 002 2z" />
          <path
            className="text-white"
            d="M9.5 7a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9.5 9a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
          />
        </svg>
      );
    }

    return (
      <svg
        className="w-5 h-5 text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 1 1 0 000 2H4v10h12V5h-2a1 1 0 100-2 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
        />
      </svg>
    );
  };

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-2">
        Currículo (PDF ou DOC)
      </label>

      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => !fileName && fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          transition-all duration-200
          ${
            isDragging
              ? "border-dark-green-300 bg-green-50"
              : fileName
              ? "border-gray-300 bg-gray-50"
              : "border-gray-300 hover:border-dark-green-300"
          }
          ${errorMessage ? "border-red-300" : ""}
        `}
      >
        <input
          // ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          {...register("file")}
          onChange={handleFileSelect}
          className="sr-only"
        />

        <AnimatePresence mode="wait">
          {!fileName ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <div className="mx-auto w-12 h-12 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-dark-green-300">
                  Clique para enviar
                </span>
                {" ou arraste o arquivo aqui"}
              </p>
              <p className="text-xs text-gray-500">
                PDF, DOC ou DOCX (máx. 10MB)
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                {getFileIcon()}
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                    {fileName}
                  </p>
                  <p className="text-xs text-gray-500">Arquivo selecionado</p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-green-50 bg-opacity-90 rounded-lg flex items-center justify-center"
          >
            <p className="text-dark-green-300 font-medium">
              Solte o arquivo aqui
            </p>
          </motion.div>
        )}
      </div>

      {errorMessage && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 block"
        >
          {errorMessage}
        </motion.span>
      )}
    </div>
  );
}
