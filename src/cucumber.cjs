module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'support/CustomWorld.ts',
      'support/hooks.ts',
      'features/steps/*.ts'
    ],
    format: ['progress'],
    parallel: 0
  }
};