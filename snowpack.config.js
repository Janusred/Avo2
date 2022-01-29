/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/index.html',
    src: '/index.js',
  },
  buildOptions: {
    baseUrl: 'https://github.com/Janusred/Avo2',
  },
}
