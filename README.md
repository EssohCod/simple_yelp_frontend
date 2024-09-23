# Welcome to My Yelp App
***

## Task
This project is a ReactJS application built to simulate a Yelp-like service. The challenge was to deploy the application to the cloud using AWS Amplify, implement user authentication, and integrate GraphQL for managing data interactions.

The key challenges included:

    Hosting the application on a cloud provider using AWS Amplify.

    Configuring authentication using AWS services.

    Ensuring the smooth integration of GraphQL for data fetching and mutations.

    Ensuring that the app runs seamlessly and that users can interact with the platform after deployment.


## Description
To address the challenges, the following steps were taken:

    Deployment: The ReactJS application was deployed using AWS Amplify, which handles CI/CD workflows for easy cloud deployment. AWS Amplify was chosen for its ease of use with React apps and its built-in capabilities for scaling and monitoring.

    Authentication: User authentication was implemented using AWS Amplify's authentication module, which integrates with Amazon Cognito to provide secure sign-up and sign-in functionalities.

    GraphQL: AWS Amplify's GraphQL support, via AWS AppSync, was used to handle data queries and mutations in a scalable way, ensuring fast and real-time data access across the application.

    Error Handling: Proper error handling was incorporated for failed authentication attempts and failed data retrievals to ensure a user-friendly experience.

The code was adapted where necessary to integrate AWS Amplify's authentication and GraphQL modules, ensuring that the app was both functional and secure.

## Installation
To install and set up the project, follow these steps:
Clone the repository:
    git clone https://github.com/your-repo/my-yelp.git
    cd my-yelp

Install dependencies: Run the following command to install all the required dependencies:
    npm install

Amplify Configuration: If you haven’t already, install AWS Amplify CLI globally:
    npm install -g @aws-amplify/cli

Initialize AWS Amplify: Configure Amplify by running the following command:
    amplify init

This will walk you through setting up AWS resources for the project.

Push Amplify resources: Once the configuration is complete, push your Amplify resources to the cloud:
    amplify push


## Usage
fter completing the installation, you can run and use the project with the following commands:

    Start the development server: To start the React app locally, run:
        npm start
        The app will be available at http://localhost:3000.

    Using the application:
        Users can sign up, sign in, and explore the features of the Yelp-like service.

        GraphQL queries will handle data fetching, allowing users to interact with the platform and make changes that are updated in real time.

    Deploy the project: After initializing and configuring the Amplify project, you can deploy it by running:
        amplify publish

        Once deployed, a live version of the app will be hosted on AWS, and the URL will be provided.

    Arguments: The project doesn't require any specific command-line arguments to run, but you can customize the project settings using AWS Amplify's dashboard for more advanced configurations.



### The Core Team
Nsikan Essoh - Software Engineer




<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>