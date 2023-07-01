## TDD Kata: String Calculator

Learning TDD can be effectively supplemented with the use of coding katas. They are small, repeatable problems that are meant to practice programming. Let's dive into a TDD kata for developing a simple string calculator.

### Problem Description

1. The String Calculator function, `add()`, will take 0, 1, or 2 numbers in a string and will return their sum. For an empty string, it will return 0. For example: "" => 0, "1" => 1, "1,2" => 3.

2. The `add()` function will handle an unknown amount of numbers.

3. The `add()` function will handle new lines between numbers. For example: "1\n2,3" => 6.

4. The `add()` function will support different delimiters. To change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers...]" For example: "//;\n1;2" => 3.

### Methodology

**Step 1**: Write a test for the first requirement.

```javascript
it("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
```

**Step 2**: Run the test and observe the fail.

**Step 3**: Write the minimum code needed to make the test pass.

```javascript
function add(numbers) {
  if(numbers === "")
    return 0;
}
```

**Step 4**: Refactor the code if required.

**Step 5**: Repeat this process for the remaining requirements. Always start with the test, then develop the code, and refactor as necessary.

By following this process, you will develop a codebase that is robust and thoroughly tested. Remember to keep your tests as simple as possible and write just enough code to make them pass.

## Usage

Ensure all necessary dependencies have been installed:

```sh
pnpm install
```

To execute the tests:

```sh
pnpm run test
```

## Wrapping Up

The practice of TDD can be a powerful method to improve the quality of your code and its maintainability. "Tidy First", an approach by Kent Beck, complements TDD by focusing on the cleanliness and organization of code. 

We hope this tdd-demo project and the associated TDD Kata provides a helpful introduction to the practices of TDD and "Tidy First". If you found this project useful, please consider giving it a ⭐️. Happy coding!
