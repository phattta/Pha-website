// next.config.mjs
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'magnumx.me',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
      },
    ],
  },
};
