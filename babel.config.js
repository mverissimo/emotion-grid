const isProd = process.env.NODE_ENV === 'production';

module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        loose: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: !isProd,
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ].filter(Boolean);

  const plugins = [
    [
      '@emotion',
      {
        sourceMap: isProd,
        autoLabel: 'dev-only',
        labelFormat: '[filename]--[local]',
      },
    ],
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
