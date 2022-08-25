const intercept = require("intercept-stdout")

// safely ignore recoil stdout warning messages
intercept((text) => (text.includes('Duplicate atom key') ? '' : text));
const isDev = process.env.NODE_ENV === 'development';
const withTM = require('next-transpile-modules')(['localbase']) // pass the modules you would like to see transpiled


/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['assets.example.com', 'hyper.com', 'ph-files.imgix.net', 'nbatopshot.com', 'abstackwp.khingars.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  webpack: config => {
    if (isDev) {
      return config;
    } else {
      config.optimization.minimize = true;
      return config;
    }
  },
})
