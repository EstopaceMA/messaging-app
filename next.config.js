/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_ID: process.env.APP_ID,
    USER_ID: process.env.USER_ID,
    DATABASE_URL: process.DATABASE_URL,
  },
};

module.exports = nextConfig;
