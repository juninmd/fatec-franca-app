```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the consistent, robust, and maintainable development of AGENTS.md, a repository for AI coding agents. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   **Module Design:** Each module should have a single, well-defined responsibility. Avoid creating modules with overlapping functionality.
*   **Reusable Components:** Components should be designed with reusability in mind.  Consider creating modular components that can be easily imported and adapted.
*   **Abstraction:**  Wherever possible, abstract common logic and data structures into reusable components.

## 2. KISS (Keep It Simple, Stupid)

*   **Code Clarity:** Prioritize readability and understandability.  Write code that is easy for other developers (and your future self) to comprehend.
*   **Minimal Complexity:** Each function and class should have a clear and justifiable purpose. Avoid unnecessary complexity.
*   **Focus on Core Logic:**  Ensure that all code directly contributes to the core task of the agent.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one primary responsibility.
*   **Open/Closed Principle:**  The agent's code should be extensible through mechanisms like APIs and interfaces, without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the system.
*   **Interface Segregation Principle:**  Clients should not be forced to depend on abstractions they do not use.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Code:**  Do not write code that is not currently required for the agent’s current functionality.
*   **Focus on the Task:**  Avoid introducing features or functionality that are not directly relevant to the agent’s current operational requirements.
*   **Refactoring:** Refactor code only when it demonstrably improves the agent’s performance or readability, not simply because it's a new concept.

## 5. Development Workflow

1.  **Plan:** Before starting a new task, clearly define the problem, desired outcome, and any necessary dependencies.
2.  **Design:**  Outline the structure, components, and algorithms involved. Consider potential edge cases and error handling.
3.  **Implement:** Write code incrementally, testing frequently.
4.  **Test:** Write unit tests to cover individual functions and components. Aim for 80% test coverage.
5.  **Review:**  Peer code reviews are essential.
6.  **Refactor:**  Periodically review and simplify the code, focusing on improved readability and maintainability.
7.  **Document:**  Provide clear documentation for code and modules.

## 6.  Code Constraints

*   **Maximum Lines of Code:**  Each file shall not exceed 180 lines of code.
*   **Readability:** Code should be formatted consistently using a style guide (e.g., Black, Google).

## 7.  Testing

*   All tests must be automated.
*   Tests shall cover all critical functionality.
*   Each test shall have a clear description.
*   Tests shall be able to determine the code's output.

## 8.  Mocking – For Testing Only

*   Mocking should only be used for testing.
*   Mock objects should be realistic representations of external systems.
*   Mock objects should be immutable and easily replaceable.
*   Test cases should isolate the specific functionality being tested.

## 9.  Development Practices

*   Prioritize clear and concise code.
*   Utilize meaningful variable and function names.
*   Write comments sparingly – focus on explaining *why* not *what*.
*   Avoid code duplication – create reusable components.
*   Maintain code style consistently.

## 10.  File Structure

*   **Modules:** Each module should have a single primary responsibility and a clear input/output.
*   **Component Files:**  Consider creating component files for reusable functionalities.
*   **Data Files:** Data is stored in separate data files for improved organization.

This document serves as a foundational framework for AGENTS.md.  Adherence to these guidelines is crucial for successful development and maintainability. Any violation will result in temporary suspension of development.
```