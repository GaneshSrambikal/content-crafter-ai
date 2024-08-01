/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    geminiKey: process.env.GEMINI_API_KEY,
  },
};

export default nextConfig;
