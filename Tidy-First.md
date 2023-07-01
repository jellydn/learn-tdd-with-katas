# Tidy First: A Software Development Approach

## Overview

"Tidy First" is a software design methodology coined by Kent Beck, a prominent software engineer known for his work on extreme programming and test-driven development. This approach focuses on cleaning up the codebase before implementing any functional changes. 

## Principles

The "Tidy First" approach is grounded in three core principles:

1. **Distinguish Between Behavior Changes and Structure Changes:** It is crucial to separate commits that modify the software's functionality from those that alter its structure. Rather than making commits that incorporate both, commits should be made that change either the behavior or structure.

2. **Tidy Before Changing:** Always clean up any messy or unorganized code before making any changes. This proactive cleanup is often more efficient than altering messy code directly, which could leave it more cluttered than before.

3. **Use 'Perspective' to Manage Time:** Implement 'Perspective' to manage software changes over time. A Perspective is essentially a timestamp marking when a change occurred in the system and when the system became aware of this change. This practice helps manage and track the history of changes in the system.

## Why Tidy First?

The "Tidy First" approach can be particularly beneficial when dealing with complex or messy code. By tidying up the code first and then implementing the behavior changes, developers often find the process more efficient and manageable than attempting to alter messy code directly. The primary benefits of this approach include:

- **Improving Code Understanding:** Cleaning the code first allows developers to gain a better understanding of it, making it easier to implement changes.

- **Enhancing Efficiency:** Frequently, the combination of structural changes followed by behavioral changes is less time-consuming than simply modifying messy code and further complicating it.

- **Reversibility:** Structural changes are usually reversible, meaning they can be implemented lightly and without substantial risk.

## Tidy First Workflow

Kent Beck has suggested the following workflow for implementing the "Tidy First" approach:

1. Identify the section of the code you intend to change.

2. Clean up this section of the code first.

3. Implement the necessary changes.

4. When committing changes, focus either on behavioral changes or structural changes, but not both at the same time.

By following these steps, developers can maintain the readability and maintainability of the codebase, critical for long-term project health.

## Additional Resources

For further guidance and a detailed discussion of the "Tidy First" approach, consider subscribing to Kent Beck's [Tidy First Substack](https://tidyfirst.substack.com/).

Remember that the "Tidy First" approach is complementary to other methodologies such as Test-Driven Development (TDD) and is in line with the broader practice of Refactoring, which subscribes to the principle of "leave the code better than you found it."
