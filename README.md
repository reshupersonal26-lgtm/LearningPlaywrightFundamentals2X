# Learning Playwright Fundamentals 2X

A Playwright test automation project for learning browser automation fundamentals.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/reshupersonal26-lgtm/LearningPlaywrightFundamentals2X.git
   cd LearningPlaywrightFundamentals2X
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests in headed mode (with browser UI):
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

## View Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   └── example.spec.ts    # Sample Playwright tests
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project dependencies
└── .gitignore
```

## Configuration

The `playwright.config.ts` includes:
- **Browsers**: Chromium, Firefox, and WebKit
- **Parallel execution**: Enabled for faster test runs
- **HTML reporter**: Generates detailed test reports
- **Trace collection**: Captures traces on first retry
