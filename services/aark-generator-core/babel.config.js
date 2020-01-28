module.exports = api => {
  api.cache(false);
  return {
    presets: ['@aark/babel-preset/node'],
    ignore: ['./**/*.jsx.aark'],
  };
};
