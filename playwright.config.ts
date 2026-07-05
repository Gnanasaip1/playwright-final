import {defineConfig, devices} from '@playwright/test';
import {defineBddConfig} from 'playwright-bdd';
import dotenv from 'dotenv';


dotenv.config();
const testDir = defineBddConfig({
    features: 'features/**/*.feature',
    steps: [
        'step-definitions/**/*.ts',
        'hooks/**/*.ts'
    ]

});

export default defineConfig({
    testDir,

    fullyParallel: true,
    retries: 0,
    workers: 5,
    timeout: 30000,

    reporter: [
        ['html', {open: 'never'}],   //always
        ['json', {outputFile: 'test-results/results.json'}]
    ],

    use: {
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
        headless: true, //false
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    },

    // projects: [
    //     {
    //         name: 'chromium',
    //         use: {
    //             ...devices['Desktop Chrome']
    //         }
    //     }
    // ]
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            },
            workers:5

        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            },
            workers:1
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            },
            workers:1
        }
    ]
});