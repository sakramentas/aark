module.exports = api => {
  api.cache(false);
  return {
    retainLines: true,
    presets: ['@aark/babel-preset/node'],
  };
};
