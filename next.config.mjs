/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.riviera.com.ua", pathname: "**" },
      { protocol: "https", hostname: "giftmall.com.ua", pathname: "**" },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "retroville.ua", pathname: "**" },
      { protocol: "https", hostname: "images.prom.ua", pathname: "**" },
    ],
  },
};

export default nextConfig;
