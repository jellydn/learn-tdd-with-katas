import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

/**
 * Initialize the database connection.
 */
export function initDbConnection() {
	return AppDataSource.initialize();
}

/**
 * Add a new user.
 * @param user - The user to add.
 * @returns The newly created user.
 */
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

/**
 * Get a user by id.
 * @param userId - This is the user id.
 * @returns The user with the given id.
 */
export async function getUserByUserId(userId: number) {
	const userRepo = AppDataSource.getRepository(User);
	return userRepo.findOneOrFail({
		where: {
			id: userId,
		},
	});
}

/**
 * Update a user.
 * @param userId - The user id.
 * @param user - The user to update.
 * @returns if the user is updated.
 */
export async function updateUser(userId: number, user: Partial<User>) {
	const userRepo = AppDataSource.getRepository(User);
	const userToUpdate = await userRepo.findOneOrFail({
		where: {
			id: userId,
		},
	});
	userRepo.merge(userToUpdate, user);
	return userRepo.save(userToUpdate);
}

/**
 * Soft delete a user.
 * @param userId - id of the user to delete.
 * @returns if the user is deleted.
 */
export async function deleteUser(userId: number) {
	const userRepo = AppDataSource.getRepository(User);
	const userToDelete = await userRepo.findOneOrFail({
		where: {
			id: userId,
		},
	});
	return userRepo.softDelete({
		id: userToDelete.id,
	});
}
