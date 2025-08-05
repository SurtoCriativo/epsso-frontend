export const UPLOAD_CONFIG = {
  wordpress: {
    // Update this to include the /cms subdirectory
    endpoint: import.meta.env.VITE_WORDPRESS_UPLOAD_ENDPOINT,
    // For wp/v2/media endpoint, you'll need application password or JWT token
    username: import.meta.env.VITE_WORDPRESS_USERNAME,
    appPassword: import.meta.env.VITE_WORDPRESS_APP_PASSWORD,
  },
} as const;
