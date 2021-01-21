const isProd = process.env.NODE_ENV === 'production';

module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          esmodules: !isProd,
        },
      },
    ],
    isProd && [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    !isProd && [
      '@babel/preset-react',
      {
        development: true,
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    !isProd && [
      '@emotion/babel-preset-css-prop',
      {
        labelFormat: '[filename]--[local]',
      },
    ],
  ].filter(Boolean);

  const plugins = [
    'lodash',
    isProd && [
      '@emotion',
      {
        sourceMap: false,
        autoLabel: 'never',
      },
    ],
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
