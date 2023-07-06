<h1 align="center">Welcome to Learn TDD With Katas 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg" />
</p>

learn-tdd-with-katas is a monorepo set up using [Turbo](https://turborepo.org/) and [pnpm](https://pnpm.io/). The API is built with [Moleculer](https://moleculer.services/docs/0.14/), a fast, modern, and powerful microservices framework for Node.js. The data is managed through [TypeORM](https://typeorm.io/), a powerful ORM for TypeScript and JavaScript that supports PostgreSQL among other databases. The tests are run with [vitest](https://vitest.dev/), a fast and native ESM test runner.

This repository is a hands-on resource for learning and practicing Test-Driven Development (TDD) with a set of kata exercises such as the String Calculator, FizzBuzz, and Roman Numerals.

[![IT Man - Mastering Test-Driven Development: A Comprehensive Walkthrough For Developer [Vietnamese]](https://i.ytimg.com/vi/w0EgJ7SW48o/hqdefault.jpg)](https://www.youtube.com/watch?v=w0EgJ7SW48o)

## Prerequisites

-   node >=16.20.0
-   pnpm

## Installation

Clone the project using the following command:

```sh
git clone https://github.com/jellydn/learn-tdd-with-katas
```

## Usage

After cloning the project, install dependencies and run tests using these commands:

```sh
pnpm install
pnpm run test
```

## [TDD Kata](./docs/TDD-Kata.md)

We provide three kata exercises: String Calculator, FizzBuzz, and Roman Numerals. You can generate a new TDD Kata for these exercises using this command:

-   **String Calculator**: This kata focuses on string operations and parsing, an essential skill for many data processing tasks.

-   **FizzBuzz**: This is a classic coding exercise that focuses on conditional logic and modularity.

-   **Roman Numerals**: This kata exercise focuses on algorithmic thinking by converting numbers to Roman numerals and vice versa.

```sh
pnpm generate
```

## Intro about TDD

### WHAT is TDD?

Test-Driven Development (TDD) is a software development approach in which tests are written before the code. The main goal of TDD is to make the code clearer, simpler, and bug-free.

### WHY use TDD?

TDD has numerous benefits:

1. **Quality**: It helps to identify and fix bugs early in the development process.
2. **Design**: It often results in more modularized, flexible, and extensible code.
3. **Productivity**: Over time, it can lead to faster development as the code base becomes more robust and new features can be built upon it more confidently.
4. **Documentation**: The tests themselves serve as a form of documentation, showing how the system is supposed to work.

### HOW to practice TDD?

TDD involves a repeating cycle of:

1. Write a test.
2. Run all tests and see if the new test fails.
3. Write the code.
4. Run tests.
5. Refactor code.
6. Repeat.

This cycle helps ensure that your code does what it's supposed to do, and it helps catch any regressions introduced by refactoring or adding new features.

### Cons

There are several reasons why some people might dislike or criticize TDD (Test-Driven Development):

1. **Time-consuming**: TDD requires writing tests before the actual implementation code, which can initially seem to slow down the development process. Some developers feel that this time would be better spent writing actual production code.

2. **Learning Curve**: TDD requires a different mindset where you think about your code's behavior before writing it. This can be challenging for developers new to the practice. Additionally, writing good, meaningful tests is a skill that requires experience to develop.

3. **Overemphasis on Testing**: Critics of TDD argue that it places too much emphasis on testing and not enough on design or architecture. This can lead to overly complex code or systems if not balanced with good design principles.

4. **Overhead**: TDD can add an extra layer of complexity and maintenance overhead. As the codebase grows, so does the suite of tests that need to be maintained.

5. **Incomplete Coverage**: Even with a thorough set of tests, not all use cases or paths through the code may be tested. Edge cases or rare scenarios might still cause unexpected behavior. This can give a false sense of security.

6. **Not Suitable for All Cases**: TDD may not be suitable or efficient for all types of programming tasks. For example, exploratory programming, prototyping, or dealing with legacy codebases might require different approaches.

Kent Beck, one of the pioneers of TDD, has recently introduced an alternative approach called "Tidy First". In essence, "Tidy First" suggests that before adding a new feature or fixing a bug, you should first tidy up the relevant section of code. The idea is that by cleaning the code first, you will have a better understanding of it, which in turn will make the change easier to implement.

["Tidy First"](./docs/Tidy-First.md) can be seen as a complement to TDD, not a replacement. While TDD is about driving the design of your code with tests, "Tidy First" is about maintaining the readability and maintainability of your codebase, which is essential for long-term project health. It's also in line with the principle of "leave the code better than you found it", which is a part of the broader practice of Refactoring.

## Video References

1. "Test-Driven Development (TDD) - Beginner's Guide to JavaScript Testing" by Fireship

    This video is a beginner's tutorial that introduces the fundamentals of JavaScript testing and Test-Driven Development. It provides valuable insight into why we test and the philosophy behind TDD. The tutorial also covers topics like functional testing, non-functional testing, setting up Jest, writing your first test, setup & teardown, and code coverage report.

    Watch the video here: [Test-Driven Development (TDD) - Beginner's Guide to JavaScript Testing](https://www.youtube.com/watch?v=Jv2uxzhPFl4&t=6s)

2. "Software Testing in 100 Seconds" by Fireship

    This video provides a quick and concise overview of software testing.

    Watch the video here: [Software Testing in 100 Seconds](https://www.youtube.com/watch?v=u6QfIXgjwGQ)

## Resources

### AI Generated Unit Tests

This project leverages AI to generate unit tests. For more information on how to use AI to generate unit tests, please refer to the auto-testgen-nodejs project https://github.com/jellydn/auto-testgen-nodejs

### Moleculer-based Microservices

This project is based on Moleculer microservices framework. To understand the structure and workflow of this project, it can be helpful to look at this Moleculer-based TypeScript template https://github.com/jellydn/moleculer-typescript-template.

## Author

👤 **Huynh Duc Dung**

-   Website: https://productsway.com/
-   Twitter: [@jellydn](https://twitter.com/jellydn)
-   Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)!
