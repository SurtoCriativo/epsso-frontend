/* eslint-disable @typescript-eslint/no-explicit-any */
import { UPLOAD_CONFIG } from "../../config/upload.config";

export interface UploadResponse {
  url: string;
  filename?: string;
  size?: number;
  type?: string;
}

export interface UploadError {
  message: string;
  code?: string;
  details?: any;
}

class UploadService {
  async uploadToWordPress(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(UPLOAD_CONFIG.wordpress.endpoint, {
        method: "POST",
        body: formData,
        // No custom headers needed if API key is not required
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Upload failed with status ${response.status}`
        );
      }

      const data = await response.json();
      console.log("WordPress upload response:", data); // Debug log

      // Handle the response structure from WordPress
      // Based on your curl output, the structure is data.data.url
      const url =
        data.data?.url ||
        data.url ||
        data.file_url ||
        data.path ||
        data.source_url;

      if (!url) {
        console.error("No URL found in WordPress response:", data);
        throw new Error("Upload successful but no URL returned");
      }

      return {
        url: url,
        filename: data.data?.filename || data.filename || file.name,
        size: data.data?.size || data.size || file.size,
        type: data.data?.type || data.type || file.type,
      };
    } catch (error) {
      console.error("WordPress upload error:", error);
      throw {
        message: "Erro ao fazer upload do arquivo",
        code: "WORDPRESS_UPLOAD_ERROR",
        details: error,
      } as UploadError;
    }
  }

  // Alternative method using WordPress Media API (requires authentication)
  async uploadToWordPressMedia(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", file.name);

    const headers: HeadersInit = {};

    // Basic auth with application password
    try {
      const response = await fetch(
        "https://epsso.com.br/cms/wp-json/wp/v2/media",
        {
          method: "POST",
          body: formData,
          headers,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Upload failed with status ${response.status}`
        );
      }

      const data = await response.json();

      return {
        url: data.source_url,
        filename: data.title.rendered || file.name,
        size: file.size,
        type: data.mime_type || file.type,
      };
    } catch (error) {
      console.error("WordPress Media upload error:", error);
      throw {
        message: "Erro ao fazer upload do arquivo",
        code: "WORDPRESS_MEDIA_UPLOAD_ERROR",
        details: error,
      } as UploadError;
    }
  }
}

export const uploadService = new UploadService();
