/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    geminiKey: process.env.GEMINI_API_KEY,
    dburl: process.env.DATABASE_URL
  },
};

export default nextConfig;
