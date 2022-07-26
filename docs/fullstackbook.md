# Full Stack Book

## Setup

```
createdb fullstackbook-todo-nestjs
npm run typeorm migration:run
npm run start:dev
```

## Notes


```
# install nest cli
npm i -g @nestjs/cli

# typeorm sample app
npx typeorm init --name MyProject --database postgres

# install dependencies
npm install --save @nestjs/typeorm typeorm pg

# generate migration
npm run typeorm migration:generate src/migration/create-todo-table

# run migration
npm run typeorm migration:run

# revert migration
npm run typeorm migration:revert

# generate resource
nest g resource todos
```