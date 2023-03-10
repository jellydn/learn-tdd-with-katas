import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env?.DB_SERVER ?? "localhost",
	port: Number(process.env?.DB_PORT ?? 5432),
	username: process.env?.DB_USERNAME ?? "test",
	password: process.env?.DB_PASSWORD ?? "test",
	database: process.env?.DB_NAME ?? "test",
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
});
