import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./todos/entities/todo.entity"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "fullstackbook-todo-nestjs",
  synchronize: false,
  logging: false,
  entities: [Todo],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
})
