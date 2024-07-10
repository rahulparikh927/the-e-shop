/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
            },
        ],
    },
    redirects: () => {
        return [
            {
                source: '/category',
                destination: '/',
                permanent: true,
            },
            {
                source: '/product',
                destination: '/',
                permanent: true,
            },
        ]
    },

};

export default nextConfig;
