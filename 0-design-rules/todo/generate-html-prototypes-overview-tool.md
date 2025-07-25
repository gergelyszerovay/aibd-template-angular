# Task: Create HTML Prototype Overview Generator

## Goal

To automate the generation of the `/workspace/docs/design/html-prototypes/0-overview.md` file by creating a script that analyzes the static HTML prototypes.

## Rationale

Manually creating and updating the overview document is tedious and error-prone. A script will ensure the documentation is always in sync with the actual component structure in the prototypes.

## Requirements

1.  **Language:** The tool **MUST** be written in TypeScript.
2.  **Input:** The script **MUST** scan all `.html` files within the `/workspace/docs/design/html-prototypes/` directory, ignoring any other directories (like `component-highlighter`).
3.  **Processing:**
    - For each HTML file, the script **MUST** parse the DOM to find all elements with a `data-component` attribute.
    - It **MUST** build a hierarchical tree representing the nesting of these components.
    - It **SHOULD** intelligently handle multiple instances of the same component under a parent by using the `(xN)` notation.
4.  **Output:**
    - The script **MUST** generate a markdown file at `/workspace/docs/design/html-prototypes/0-overview.md`.
    - The output **MUST** contain a section for each HTML file, followed by the generated component tree in a markdown code block.

## Technical Details

- **Package Manager:** The project uses `pnpm`.
- **Execution:** The TypeScript script **SHOULD** be executed directly using `tsx`.
- **Dependencies:** The script **MUST** use the `jsdom` library for DOM parsing. It **MUST** be added to `devDependencies` using `pnpm`.

## Acceptance Criteria

- A TypeScript script is created that fulfills the requirements.
- A `pnpm` script (e.g., `"docs:gen-overview": "tsx ./scripts/generate-overview.ts"`) is added to `package.json`.
- The generated `/workspace/docs/design/html-prototypes/0-overview.md` file is accurate.
- The script is well-structured and includes comments where necessary.
