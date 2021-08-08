const { devices } = require('playwright');
const path = require('path');
module.exports = {
  timeout: 25000,
  retries: 0,
  workers: 2,
  use: {
    headless: false,
    video: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
  ],
};