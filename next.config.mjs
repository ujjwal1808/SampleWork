/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/main_dashboard",
            permanent: true,
          },

          
        ];
      },
};

export default nextConfig;
