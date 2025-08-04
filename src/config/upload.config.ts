export const UPLOAD_CONFIG = {
  wordpress: {
    // Update this to include the /diretorio subdirectory
    endpoint:
      import.meta.env.VITE_WORDPRESS_UPLOAD_ENDPOINT ||
      "https://epsso.com.br/diretorio/wp-json/custom/v1/upload",

    apiKey: import.meta.env.VITE_EPSSO_API_KEY,
    // For wp/v2/media endpoint, you'll need application password or JWT token
    username: import.meta.env.VITE_WORDPRESS_USERNAME,
    appPassword: import.meta.env.VITE_WORDPRESS_APP_PASSWORD,
  },
} as const;
