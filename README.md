# Serverless + Slack

🚀 Receive and send real time events/messages to Slack

### Essential plugins

- `serverless-bundle` plugin that optimally packages your ES6 or TypeScript. It uses the [serverless-webpack](https://www.github.com/serverless-heaven/serverless-webpack) plugin internally. So we **don't have to maintain your own Webpack configs**
- `serverless-http` I hesitated to use [serverless-express](https://www.npmjs.com/package/serverless-express) but then reverted to serverless-http because it seems to keep updating more than the other.

### Features

Developer experience first:

- 🔥 [Serverless framework](https://www.serverless.com/)
- 📖 Local support with Serverless Offline
- ⚙️ Environment variable with Serverless Dotenv
- ⚡️ [ExpressJS](http://expressjs.com/)
- ✅ Type checking [TypeScript](https://www.typescriptlang.org/) with strict mode
- 📏 Linter with [ESLint](https://eslint.org/) with Airbnb configuration
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 🦺 Testing with Jest
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest
- ✨ HTTP Api instead of API gateway for cost optimization
- 💨 Live reload

