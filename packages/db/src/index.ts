import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

export function initDbConnection() {
	return AppDataSource.initialize();
}

// add new user
export async function addUser(user: Partial<User>) {
	const userRepo = AppDataSource.getRepository(User);
	const newUser = userRepo.create(user);
	return userRepo.save(newUser);
}

// get all users
export async function getAllUsers() {
	const userRepo = AppDataSource.getRepository(User);
	return userRepo.find();
}

// get user by id
export async function getUserById(id: number) {
	const userRepo = AppDataSource.getRepository(User);
	return userRepo.findOneOrFail({
		where: {
			id,
		},
	});
}

// update user
export async function updateUser(id: number, user: Partial<User>) {
	const userRepo = AppDataSource.getRepository(User);
	const userToUpdate = await userRepo.findOneOrFail({
		where: {
			id,
		},
	});
	userRepo.merge(userToUpdate, user);
	return userRepo.save(userToUpdate);
}

//soft delete user
export async function deleteUser(id: number) {
	const userRepo = AppDataSource.getRepository(User);
	const userToDelete = await userRepo.findOneOrFail({
		where: {
			id,
		},
	});
	return userRepo.softDelete({
		id: userToDelete.id,
	});
}
