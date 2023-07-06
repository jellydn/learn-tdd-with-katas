import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	const testFiles = [
		{
			type: "add",
			path: "packages/{{package}}/index.ts",
			templateFile: "templates/index.ts.hbs",
		},
		{
			type: "add",
			path: "packages/{{package}}/package.json",
			templateFile: "templates/package.json.hbs",
		},
		{
			type: "add",
			path: "packages/{{package}}/vitest.config.ts",
			templateFile: "templates/vite.config.ts.hbs",
		},
	];

	plop.setGenerator("TDD Kata - String Calculator", {
		description: "sum numbers from a string",
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
			{
				type: "add",
				path: "packages/{{package}}/README.md",
				templateFile: "templates/string-calculator-README.md.hbs",
			},
			{
				type: "add",
				path: "packages/{{package}}/index.test.ts",
				templateFile: "templates/string-calculator.test.ts.hbs",
			},
			...testFiles,
		],
	});

	plop.setGenerator("TDD Kata - Fizz Buzz", {
		description: "print fizz buzz base on a number",
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
			{
				type: "add",
				path: "packages/{{package}}/README.md",
				templateFile: "templates/fizz-buzz-README.md.hbs",
			},
			{
				type: "add",
				path: "packages/{{package}}/index.test.ts",
				templateFile: "templates/fizz-buzz.test.ts.hbs",
			},
			...testFiles,
		],
	});

	plop.setGenerator("TDD Kata - Roman Numerals", {
		description: "convert number to roman numerals",
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
			{
				type: "add",
				path: "packages/{{package}}/README.md",
				templateFile: "templates/roman-numerals-README.md.hbs",
			},
			{
				type: "add",
				path: "packages/{{package}}/index.test.ts",
				templateFile: "templates/roman-numerals.test.ts.hbs",
			},
			...testFiles,
		],
	});
}
