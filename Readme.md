## Microsoft Dynamics 365 API with Node | TypeScript | MSAL | Dynamics-Web-Api

## Features

- Access Existing data from Microsoft Dynamics 365 instance and create fancy Logical App or Mobile application.
- This utility provided example to collect certain information from existing instance of D365.

## Requirements

- Node
- Express
- Azure/msal-node (Microsoft Authentication Library for Node)
- Dynamics-Web-API
- TypeScript

## Pre-requisite

1. Make sure before begin you will have to access your Azure Portal and create a App within "App Registrations".
2. And setting up correct permission to communicate with instance of Dynamics 365.
3. Later on provide correct Security Role within D365 Instance so that the code provided here will work correctly.

## Setup

1. Clone the repository.

   ```
   git clone https://github.com/patrixshah/D365Crm.git
   ```

2. Change directory to the cloned repository.

   ```
   cd D365Crm
   ```

3. Code structure of Project

   ```lua
    /D365Crm
    |-- /src
    |   |-- /controllers
    |   |   |-- accountController.ts
    |   |   |-- contactController.ts
    |   |   |-- leadController.ts
    |   |-- /interfaces
    |   |   |-- accountInterface.ts
    |   |   |-- contactInterface.ts
    |   |   |-- leadInterface.ts
    |   |-- /models
    |   |   |-- d365Model.ts
    |   |-- /routes
    |   |   |-- accountRoutes.ts
    |   |   |-- contactRoutes.ts
    |   |   |-- leadRoutes.ts
    |   |-- /services
    |   |   |-- AuthService.ts
    |   |-- index.ts
    |-- .env-sample
    |-- .eslintrc
    |-- package.json
    |-- package-lock.json
    |-- Readme.md
    |-- tsconfig.json
   ```
4. Install the required packages.

   ```
   npm update
   ```
5. Run the application.

   ```
   npm run dev
   ```

6. Build the application source code.

   ```
   npm run build
   ```

## Usage

1. Create an .env file from the provided copy and set up all the required information before starting application.
2. Access the application by visting http://localhost:3000
3. This code base collect data from entities like account, contact, lead only.
4. To get data from contact you can access it by using http://localhost:3000/v1/contacts
5. Similarly you can get specific contact record, you can access it using http://localhost:3000/v1/contacts/[GUID]


## Contributing

Feel free to submit pull requests, raise issues, or give feedback. Your contributions are welcome!

## If you find this tool useful, please give us a ⭐! Starring the repository supports the project and encourages further development.

## License

This project is open source and available under the MIT License.
