# Anyware_Software_Task

# Backend Configurations

After cloning the repo you need to create .env file

```bash
cd server/
touch .env
```

## MongoDB

- You need to create a Database, my choice here was to create account on [atlas](https://www.mongodb.com/atlas/database) for cloud database service.
- in .env file :

```bash
PORT = XXXX
NODE_ENV = development | test | production
MONGO_URI = mongodb+srv://<username>:<password>@cluster0.t8sswhx.mongodb.net/<databaseName>?retryWrites=true&w=majority
```

# Frontend Configurations:

- You need to create .env file in client folder:
```bash
cd client/
touch .env
```
- in .env file :
```bash
VITE_API_URI = http://localhost:<Port>/api/v1
```

## Scripts:

- For running the server 
```bash
cd server/
npm run dev 
```

- For running the client 
```bash
cd client/
npm run dev 
```

- For adding data to the database:

```bash
cd server/
npm run seed
```

- For Running tests in the react app:

```bash
cd client/
npm run test 
```
OR

```bash
cd client/
npm run test:ui
```



