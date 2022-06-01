/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['@silevis/reactgrid']); // pass the modules you would like to see transpiled

module.exports = nextConfig
