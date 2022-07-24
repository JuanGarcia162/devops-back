import "reflect-metadata"
import { DataSource } from "typeorm"
import { ToDo } from "./todo/models/todo.entity"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "fullstackbook-todo-nestjs",
  synchronize: false,
  logging: false,
  entities: [ToDo],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
})
