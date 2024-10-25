/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.pixabay.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "picsum.photos" },
      { hostname: "localhost" },
    ],
  },
};

module.exports = nextConfig;
