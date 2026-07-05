import { execSync } from 'child_process';

const args = process.argv.slice(2).join(' ');

try {
    execSync('npx bddgen', { stdio: 'inherit' });

    try {
        execSync(`npx playwright test ${args}`, { stdio: 'inherit' });
    } catch (testError) {
        console.log('Tests failed, but email report will still be sent...');
    }

    execSync('npx ts-node utils/emailReport.ts', { stdio: 'inherit' });

    execSync('npx playwright show-report', { stdio: 'inherit' });

} catch (error) {
    console.log('Execution failed:', error);
}