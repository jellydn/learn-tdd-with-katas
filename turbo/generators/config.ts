import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("tdd-kata", {
		description:
			"Create a new TDD Kata project with a README, index file, test file, package.json, and vite.config.ts",
		prompts: [
			{
				type: "input",
				name: "package",
				message: "What is the name of the new pkg to create?",
				validate: (input: string) => {
					if (input.includes(".")) {
						return "file name cannot include an extension";
					}
					if (input.includes(" ")) {
						return "file name cannot include spaces";
					}
					if (!input) {
						return "file name is required";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "title",
				message: "What should be the title of the new package?",
			},
		],
		actions: [
			// Create README.md
			{
				type: "add",
				path: "packages/{{package}}/README.md",
				templateFile: "templates/README.md.hbs",
			},
			// Create index file
			{
				type: "add",
				path: "packages/{{package}}/index.ts",
				templateFile: "templates/index.ts.hbs",
			},
			// Create test file
			{
				type: "add",
				path: "packages/{{package}}/index.test.ts",
				templateFile: "templates/index.test.ts.hbs",
			},
			// create package.json
			{
				type: "add",
				path: "packages/{{package}}/package.json",
				templateFile: "templates/package.json.hbs",
			},
			// create vitest.config.ts
			{
				type: "add",
				path: "packages/{{package}}/vitest.config.ts",
				templateFile: "templates/vite.config.ts.hbs",
			},
		],
	});
}
