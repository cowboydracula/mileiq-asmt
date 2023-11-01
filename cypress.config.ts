import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://dashboard.mileiq.com/signup?',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/**/*.feature',
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mocha-junit-reporters, mochawesome',
      mochaJunitReportersReporterOptions: {
        mochaFile: 'cypress/results/results-[hash].xml'
      },
      mochawesomeReporterOptions: {
        "reportDir": "results/mochawesome",
        "quiet": true,
        "overwrite": false,
        "html": false,
        "json": true
      }
    }
  },
});
