# Task: Generate Documentation Index

## Objective

To generate a master `index.md` for the project's `/docs` directory that serves as a dynamic inventory of all documentation files, including a summary for each.

## Placeholders to Provide

- `{{PROJECT_NAME}}`: The name of the project (e.g., "Private MCP Cloud Code Agent").
- `{{DOCS_DIR_PATH}}`: The absolute path to the documentation directory (`/workspace/docs/`).
- `{{TEMPLATE_PATH}}`: The absolute path to the template file (`/workspace/aibd/architect/tasks/generate-docs-index/index.template.md`).
- `{{OUTPUT_PATH}}`: The absolute path where the final generated index will be saved (`/workspace/docs/index.md`).

## Context & Persona

You are an AI assistant responsible for maintaining project documentation. Your task is to scan the documentation directory, read each file to extract a summary, categorize them, and generate a master index that is always up-to-date.

## Process

1.  **Scan for Documentation Files:**

    - Recursively scan the `{{DOCS_DIR_PATH}}` to find all `.md` files, grouping them by their parent directory (e.g., `overview`, `feature-level-prd`).

2.  **Extract Summaries and Format:**

    - For each file in each category:
      - Read the entire content of the `.md` file.
      - Extract a summary. The summary is the content of the "Objective" section. If no "Objective" section is found, use the first paragraph of the file.
      - Format the output as a markdown list item: `- **[File Name](./path/to/file.md)**: Extracted summary.`
      - The file name in the link should be the original filename.

3.  **Populate Template:**

    - Load the content from `{{TEMPLATE_PATH}}`.
    - Replace `{{PROJECT_NAME}}` with the provided value.
    - Replace the category placeholders (e.g., `{{OVERVIEW_FILES_WITH_SUMMARIES}}`, `{{FEATURE_PRD_FILES_WITH_SUMMARIES}}`) with their corresponding formatted lists of files and summaries.

4.  **Generate the Final Document:**
    - Save the final, complete markdown file to `{{OUTPUT_PATH}}`.
