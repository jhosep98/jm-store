/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.pixabay.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "picsum.photos" },
      { hostname: "localhost" },
      { hostname: "jm-store.onrender.com" },
    ],
  },
};

module.exports = nextConfig;
