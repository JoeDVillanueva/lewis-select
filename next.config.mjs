/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // v3.6: route renamed. Preserve legacy /start-a-conversation links via 308.
      {
        source: "/start-a-conversation",
        destination: "/inaugural",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
