/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.blogs.es",
      "images.philips.com",
      "mobilecity-live.s3.ap-southeast-2.amazonaws.com",
      "www.musicworks.co.nz",
    ],
  },
};

module.exports = nextConfig;
