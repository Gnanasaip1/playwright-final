import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const resultsPath = 'test-results/results.json';
const reportPath = 'playwright-report/index.html';
const testResultsDir = 'test-results';

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

let total = 0;
let passed = 0;
let failed = 0;
let skipped = 0;

const testRows: string[] = [];
const attachments: any[] = [];

function formatDuration(ms: number) {
    const seconds = Math.round(ms / 1000);
    return `${seconds}s`;
}

function collectArtifacts(dir: string) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            collectArtifacts(fullPath);
        } else if (
            item.endsWith('.png') ||
            item.endsWith('.webm') ||
            item.endsWith('.zip') ||
            item.endsWith('.md')
        ) {
            attachments.push({
                filename: item,
                path: fullPath
            });
        }
    }
}

function readSuites(suites: any[]) {
    for (const suite of suites) {
        if (suite.specs) {
            for (const spec of suite.specs) {
                total++;

                const test = spec.tests[0];
                const result = test.results[0];

                const status = result.status;
                const duration = formatDuration(result.duration || 0);

                if (status === 'passed') passed++;
                else if (status === 'failed') failed++;
                else skipped++;

                const icon = status === 'passed' ? '✅' : status === 'failed' ? '❌' : '⚠️';

                testRows.push(`
                    <tr>
                        <td>${icon}</td>
                        <td>${getReadableTestName(spec, result)}</td>
                        <td>${status.toUpperCase()}</td>
                        <td>${duration}</td>
                    </tr>
                `);
            }
        }

        if (suite.suites) {
            readSuites(suite.suites);
        }
    }
}

function getReadableTestName(spec: any, result: any) {
    const stepTitles = result.steps?.map((step: any) => step.title).join(' ') || '';

    const loginMatch = stepTitles.match(/User logs in as "([^"]+)"/);

    if (loginMatch) {
        return `Login - ${loginMatch[1]}`;
    }

    return spec.title;
}

readSuites(results.suites);
collectArtifacts(testResultsDir);

attachments.push({
    filename: 'results.json',
    path: resultsPath
});

if (fs.existsSync(reportPath)) {
    attachments.push({
        filename: 'playwright-report.html',
        path: reportPath
    });
}

const htmlBody = `
<div style="font-family: Arial, sans-serif; color: #333;">
    <h2>Playwright BDD Automation Execution Report</h2>

    <p><b>Project:</b> Playwright BDD Framework</p>
    <p><b>Environment:</b> QA</p>
    <p><b>Browser:</b> Chromium</p>
    <p><b>Execution Date:</b> ${new Date().toLocaleString()}</p>

    <h3>Execution Summary</h3>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr>
            <th>Total</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>Skipped</th>
        </tr>
        <tr>
            <td>${total}</td>
            <td style="color: green;"><b>${passed}</b></td>
            <td style="color: red;"><b>${failed}</b></td>
            <td style="color: orange;"><b>${skipped}</b></td>
        </tr>
    </table>

    <h3>Scenario Results</h3>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr>
            <th>Status</th>
            <th>Scenario</th>
            <th>Result</th>
            <th>Duration</th>
        </tr>
        ${testRows.join('')}
    </table>

    <br>
    <p>Please find attached:</p>
    <ul>
        <li>Playwright HTML Report</li>
        <li>results.json</li>
        <li>Failure screenshots/videos if available</li>
    </ul>

    <p>Regards,<br><b>Automation Framework</b></p>
</div>
`;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendReport() {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Playwright BDD Report - Passed: ${passed}, Failed: ${failed}`,
        html: htmlBody,
        attachments
    });

    console.log('Professional email report sent successfully');
}

sendReport();