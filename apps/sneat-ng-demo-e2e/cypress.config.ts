import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: 'src/fixtures',
    specPattern: 'src/integration/**/*.spec.ts',
    supportFile: 'src/support/index.ts',
    video: true,
    videosFolder: '../../dist/cypress/apps/sneat-ng-demo-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/sneat-ng-demo-e2e/screenshots',
    chromeWebSecurity: false,
  },
});
