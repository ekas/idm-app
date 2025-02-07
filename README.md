# IDM App

Project is build using the vuejs and being deployed over [Vercel](https://vercel.com/)

[Frontend Demo Link](https://idm-frontend-murex.vercel.app/) is also available

[Backend API Link](https://idm-app-api.vercel.app/) is also available - To test with Postman

## Project Local Build Instructions

Make sure you've [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [`yarn`](https://docs.npmjs.com/cli/v8/commands/npm-install) & [`nodejs`](https://nodejs.org/en/) installed in your system.

Open terminal and follow these steps;

- Step 1: Clone the repo.

```bash
git clone https://github.com/ekas/idm-app.git
```

You should now see a `idm-app` folder in your present working directory. Let's change directory to it.

```bash
cd idm-app/
```

- Step 2: Frontend Build Instructions. Install dependencies.

```bash
cd idm-frontend/
npm install
```

This will use `npm` to install project dependencies.

- Step 3: Start the frontend project.

```bash
npm start
```

This will run a local instance of the application `http://localhost:3000/`

- Step 4: Backend Build Instructions. Install dependencies.

Open a new terminal and enter following command.

```bash
cd idm-app-api/
npm install
```

- Step 5: Before starting you would need 2 environment varibales:

```bash
DATABASE_URL="<PostgreSQL Database Connection string>"
WHITELIST_URLS=http://localhost:3000,http://localhost:3002
```

- Step 6: Start the backend project.

```bash
npm start
```

- Step 6: After Starting Backend Server, you could test the API's using [Postman](https://www.postman.com/jp/downloads/) - please import [JSON](https://github.com/ekas/idm-app/blob/main/idm-app-api/IDM%20App%20Api.postman_collection.json).

```bash
npm run dev
```

This will run a local backend instance of the application `http://localhost:3001/`. If you change the backend port don't forget to update the `.env` file in the frontend folder

## Project Features

- Accept CSV Files - Use [Sample CSV](https://github.com/ekas/idm-app/blob/main/sample.csv)
- Reads CSV Content and Classify the text
- Classified Data is saved in PostgreSQL

## Project Screenshots

[Application Demo Video](https://github.com/ekas/idm-app/blob/main/assets/application_ui.mov)

[Postman API Demo Video](https://github.com/ekas/idm-app/blob/main/assets/postman.mov)

[Prisma Studio PostgreSQL cloud DB](https://github.com/ekas/idm-app/blob/main/assets/prisma_studio.mov)

## Thank You
