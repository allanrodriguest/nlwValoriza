## NLW Valoriza

- API that allows users to compliment each other by using tags.

#

## 💻 Technologies <a name="technologies"></a>

- **[Node.js](https://nodejs.org/en/)**
- **[JSON Web Tokens](https://jwt.io/)**
- **[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)**
- **[Express](https://expressjs.com/pt-br/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Beekeeper](https://www.beekeeperstudio.io/)**
- **[Insomnia](https://insomnia.rest/)**

#

## Running on your machine <a name="execution"></a>

```bash

# Clone the repository
$ git clone https://github.com/allanrodriguest/nlwValoriza

# Execute in your terminal
$ yarn dev
```

#

## Database Setup

The application uses just one database: [SQLite](https://www.sqlite.org/index.html).

### SQLite

Store all application data. For more information on to how to setup your database:

- [typeorm](https://typeorm.io/#/using-ormconfig)
  > You can find the application's `ormconfig.js` file in the root folder.

#### Migrations

📌 Remember to run the database migrations:

```
$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run
```

Or:

```
$ yarn typeorm migration:run
```

> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

#

## Routes <a name="routes"></a>

- **POST**
  - `/tags` -> Creating a new tag
  - `/users` -> Creating a new user
  - `/login` -> Authenticate user
  - `/compliments` -> Creating a new compliment (admin only)
- **GET**
  - `/tags` -> List all stored tags
  - `/users` -> List all registered users
  - `/users/compliments/send` -> List sent compliments
  - `/users/compliments/receive` -> List received compliments
