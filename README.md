# Iterate AI Task - Using NEXT.JS

The Full-stack web app was made using Next.JS using Open AI models. The following documents the process of the project and how it works.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [APIs](#apis)
- [CI/CD](#cicd)

## Installation

You can just access the deployed link at by clicking [here](https://iterate-ai-chi.vercel.app/)

1. You can clone the repo and then run

```bash
npm install
```

in the terminal.

2. Then `npm run dev` in order to start the development server

## Usage

After starting the development server with `npm run dev`, open your web browser and navigate to `http://localhost:3000` (or the port you've configured).

The application has a simple and intuitive interface. Here's a brief overview of how to use it:

1. **Generating Content**: To generate new content, click on the "Generate" button. You may be prompted to enter some information or parameters for the generation process.

2. **Viewing Generated Content**: The API request takes sometimes upto 11 seconds to resolve. 3 app ideas with suggested icons will be displayed in the main area of the app.

**Features NOT added but are planned**

1. **Navigation**: Use the navigation bar at the top of the application to navigate between different pages.
2. **User Profile/Auth**: You can view and edit your user profile by navigating to the "Profile" page. Here, you can update your profile information and view your activity.

To create a production build, use `npm run build`.

## APIs

OpenAI models were used and NextJS was used to implement two POST request which are sent at the time of clicking the `Generate` button.

1. **api/images**: An API thats uses the `DALL-E 2` model to produce 3 `256x256` logos for the app idea
2. **api/prompt**: An API that uses the `gpt-3.5-turbo-0125` model to produce 3 app ideas in a JSON format. The OpenAI Playground was used to fine-tune and tune the hyperparameters of the model.

## CI/CD

This project uses GitHub Actions for continuous integration and vercel for continuous deployment. There are two workflows:

1. **docker.yml**: This workflow builds a Docker image of the application and pushes it to Docker Hub. The docker hub where the image is pushed to is [here](https://hub.docker.com/repository/docker/yoshicon/iterate-ai/general).
2. **lint.yml**: This workflow runs ESLint on the codebase to catch any syntax errors or problematic patterns.

