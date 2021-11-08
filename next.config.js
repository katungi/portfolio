module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.deezer.com/',
      },
      {
        source: '/api/:path*',
        destination: 'https://section-author-feeds.louisefindlay.com',
      },
    ];
  },
};
