module.exports = {
  images: {
    domains: ['i.ytimg.com'],
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/CodeForUkraine',
        destination: '/blog/2022-03-01-codeforukraine-hackathon',
      },
    ];
  },
};
