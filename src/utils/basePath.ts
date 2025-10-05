// Utility to get the base path for assets in production
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/prthy-1' : '';
};

// Helper to get the full path for an image
export const getImagePath = (path: string) => {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
