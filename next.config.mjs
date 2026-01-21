/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/AaronCharlesWebsite' : '';

const nextConfig = {
    output: 'export',
    basePath: basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
