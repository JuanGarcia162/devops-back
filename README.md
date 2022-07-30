# Full Stack Book

Terminal

```
npm i -g @nestjs/cli
nest new fullstackbook-todo-nestjs
npm run start:dev
nest g resource todos
createdb fullstackbook-todo-nestjs
npm install --save @nestjs/typeorm typeorm pg
npx typeorm migration:create create-todos-table
npx typeorm migration:create add-completed-to-todos
npm run typeorm migration:run
npm run typeorm migration:revert
npm run test
```