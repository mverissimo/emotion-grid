module.exports = {
  flags: {
    FAST_DEV: true,
    SSR_DEV: false,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: 'dev-only',
        labelFormat: '[filename]--[local]',
      },
    },
  ],
};
