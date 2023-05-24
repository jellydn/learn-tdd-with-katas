import { getAllUsers, getUserByUserId } from "db";
import { Context, ServiceSchema } from "moleculer";

const userService: ServiceSchema = {
	name: "user",

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 * Get all users
		 *
		 * @returns
		 */
		all: {
			rest: {
				method: "GET",
				path: "/",
			},
			async handler() {
				return getAllUsers();
			},
		},

		/**
		 * Get user by id
		 *
		 * @param {String} id - User id
		 */
		profile: {
			rest: "/profile/:userId",
			params: {
				userId: "string",
			},
			/** @param {Context} ctx  */
			async handler(
				ctx: Context<{
					userId: string;
				}>,
			) {
				return getUserByUserId(Number(ctx.params.userId));
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	// created() {},

	/**
	 * Service started lifecycle event handler
	 */
	// async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	// async stopped() {},
};

export default userService;
