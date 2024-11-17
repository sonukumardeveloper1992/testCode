# Typescript Lambda Monorepo

## Setup
1. Install dependencies: `yarn install`
2. Test the Lambda function: `yarn test` in `packages/lambda-function`.
3. Deploy to AWS: `cd packages/infrastructure && cdk deploy`.

## API
- `/hello`: Returns "Hello, World" or "Hello, [name]".
- `/swagger.json`: Returns API documentation.
