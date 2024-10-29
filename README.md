# Marcel Recruitment Task

## General concept

The application was built based on following instructions:

> Imagine a gigantic laboratory network with many buildings in many locations, numerous rooms, lab
> workers, equipment, storage compartments, etc.
> Your job is to create an application where users will be able to track the placement of test samples.

In response a simple two screens application was created. A landing page with a search input to search for test samples and a screen with test sample location details. The UI is pretty self explanatory.

Application was quickly bootstraped using Next.js for routing and rendering. Libraries "shadcn/ui" and "Tailwind" were used to quickly prototype an usable UI.

Application uses mocked data, served by two internal endpoints, but can be quickly refactored to use real data eg. from an external API.

Few sample E2E tests were written using Playwright to test core functionalities of searching test samples and viewieng their location details.

## Setup

### Prerequisites

Nodejs and NPM is required to install dependencies, run the application and tests. LTS version is recommended.

### Installing dependencies

Run `npm install` command in the root directory of the project (where `package-lock.json` file is located) to install necessary dependencies.

## Running the application

### Development mode

You can use `npm run dev` command to run the application in dev mode. It will be available at `http://localhost:3000`.

### Building and running in production mode

You can build the application using `npm run build` command. This will generate build artifacts in the `./.next` directory. You can then use the `npm run start` command to run the application in production mode. It will be available at `http://localhost:3000`.

## Testing

### Prequisites

Run `npx playwright install` command in the root directory of the project to install necessary dependencies for testing.

### Running E2E test

Use the `npm run test:e2e` command to run all E2E tests.
