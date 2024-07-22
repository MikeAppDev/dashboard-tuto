/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com" 
            },
            {
                protocol: "https",
                hostname: "cdn-s-www.dna.fr",
            },
            {
                protocol: "https",
                hostname: "printler.com"
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com"
            }
        ], 
    },
}

module.exports = nextConfig
