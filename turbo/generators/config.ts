import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("tdd-kata", {
		description:
			"Create a new TDD Kata with a README.md, index.ts, and index.test.ts",
		prompts: [
			{
				type: "input",
				name: "file",
				message: "What is the name of the new file to create?",
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
				type: "list",
				name: "type",
				message: "What type of file should be created?",
				choices: [".js", ".ts"],
			},
			{
				type: "input",
				name: "title",
				message: "What should be the title of the new file?",
			},
		],
		actions: [
			// Create README.md
			{
				type: "add",
				path: "tdd/{{file}}/README.md",
				templateFile: "templates/README.md.hbs",
			},
			// Create index file
			{
				type: "add",
				path: "tdd/{{file}}/index{{type}}",
				templateFile: "templates/index{{type}}.hbs",
			},
			// Create test file
			{
				type: "add",
				path: "tdd/{{file}}/index.test{{type}}",
				templateFile: "templates/index.test{{type}}.hbs",
			},
		],
	});
}
