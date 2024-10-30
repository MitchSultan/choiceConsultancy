/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Add this line
    reactStrictMode: true,
    
    

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
