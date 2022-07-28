# Full Stack Book

Terminal

```
npm i -g @nestjs/cli
nest new fullstackbook-todo-nestjs
npm run start:dev
createdb fullstackbook-todo-nestjs
npm run typeorm migration:run
npx typeorm init --name MyProject --database postgres
npm install --save @nestjs/typeorm typeorm pg
npm run typeorm migration:generate src/migration/create-todo-table
npm run typeorm migration:run
npm run typeorm migration:revert
nest g resource todos
```