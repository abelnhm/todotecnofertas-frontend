/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'src/main.tsx',
    'src/vite-env.d.ts',
    'src/config.ts',
    'src/components/offer-details',
    'src/services/local.storage.ts',
    'src/store/store.ts',
    'src/components/category-header',
    'src/components/form-edit',
    'src/services/cloudinary.ts',
    'src/router/*',
  ],
};
