import * as db from "db";
import { fromPartial } from "@total-typescript/shoehorn";
import { Errors, ServiceBroker } from "moleculer";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import TestService from "../../../services/user.service";

const { ValidationError } = Errors;

vi.mock("db");

describe("Test 'user' service", () => {
	const broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(async () => broker.start());
	afterAll(async () => {
		vi.restoreAllMocks();
		return broker.stop();
	});

	describe("Test 'user.all' action", () => {
		it("should return with all users", async () => {
			vi.spyOn(db, "getAllUsers").mockResolvedValue([
				{
					id: 1,
					firstName: "Dung",
					lastName: "Huynh",
					age: 35,
				},
			]);
			const response = await broker.call("user.all");

			expect(response).toMatchSnapshot();
		});
	});

	describe("Test 'user.profile' action", () => {
		it("should return with profile", async () => {
			vi.spyOn(db, "getUserByUserId").mockResolvedValue(
				fromPartial({
					id: 1,
					age: 35,
					firstName: "Dung",
					lastName: "Huynh",
				})
			);
			const response = await broker.call("user.profile", {
				userId: "1",
			});

			expect(response).toMatchSnapshot();
		});

		it("should reject an ValidationError", async () => {
			expect.assertions(1);
			try {
				await broker.call("user.profile");
			} catch (error: unknown) {
				expect(error).toBeInstanceOf(ValidationError);
			}
		});
	});
});
