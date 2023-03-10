import { AppDataSource } from "./data-source";

export function initDbConnection() {
	return AppDataSource.initialize();
}
