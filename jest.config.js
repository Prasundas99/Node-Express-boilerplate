export const testEnvironment = 'node';
export const testEnvironmentOptions = {
  NODE_ENV: 'test',
};
export const restoreMocks = true;
export const coveragePathIgnorePatterns = ['node_modules', 'src/config', 'src/app.js', 'tests'];
export const coverageReporters = ['text', 'lcov', 'clover', 'html'];
