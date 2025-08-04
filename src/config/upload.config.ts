export const UPLOAD_CONFIG = {
  wordpress: {
    // Update this to include the /diretorio subdirectory
    endpoint:
      import.meta.env.VITE_WORDPRESS_UPLOAD_ENDPOINT ||
      "https://epsso.com.br/diretorio/wp-json/custom/v1/upload",

    // For wp/v2/media endpoint, you'll need application password or JWT token
    username: import.meta.env.VITE_WORDPRESS_USERNAME,
    appPassword: import.meta.env.VITE_WORDPRESS_APP_PASSWORD,
  },
} as const;
