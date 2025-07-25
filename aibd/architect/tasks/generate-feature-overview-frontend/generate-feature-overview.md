# Task: Generate Feature Overview Document

## Objective

To generate a comprehensive feature and sitemap overview document by reading all individual feature definition files and the project sitemap, and creating a unified summary based on a provided template.

## Placeholders to Provide

Before running this task, replace the following placeholders with project-specific values:

- `{{PROJECT_NAME}}`: The name of the project (e.g., "UX Knowledge Ecosystem Platform").
- `{{SITEMAP_AND_ROUTES_PATH}}`: The relative path to the project's sitemap and routes document. This file must contain both a visual sitemap (like a Mermaid diagram) and a markdown table of the application's routes. (e.g., `/workspace/docs/project-level-docs/sitemap.md`).
- `{{FEATURE_DIR_PATH}}`: The relative path to the directory containing feature definition markdown files (e.g., `/workspace/docs/feature-level-prd/`).
- `{{TEMPLATE_PATH}}`: The relative path to the template file to use (e.g., `/workspace/aibd/templates/feature-overview.template.md`).
- `{{OUTPUT_PATH}}`: The relative path where the final generated overview document will be saved (e.g., `/workspace/docs/overview/features.md`).

## Context & Persona

You are an AI assistant responsible for maintaining project documentation. Your task is to synthesize information from multiple source files into a single, structured overview document. You must be precise, follow the specified format exactly, and ensure the generated document is consistent with the source files.

## Process

1.  **Read Template and Sitemap/Routes Document:**

    - Load the content from `{{TEMPLATE_PATH}}`.
    - Load the content from `{{SITEMAP_AND_ROUTES_PATH}}`.
    - Replace the `{{SITEMAP_CONTENT}}` placeholder in the template with the full content of the sitemap/routes file.
    - In the updated template content, replace `{{PROJECT_NAME}}` with the provided value.

2.  **Locate Feature Source Files:**

    - Identify all feature definition markdown files within `{{FEATURE_DIR_PATH}}`. Exclude any non-feature files like overviews or route maps.

3.  **Generate `{{FEATURE_SECTIONS}}` Content:**

    - The `{{FEATURE_SECTIONS}}` placeholder in the template must be replaced by a series of formatted markdown blocks, one for each feature.
    - To generate this content, iterate through each feature file from step 2 and perform the following extraction steps, using the content from `{{SITEMAP_AND_ROUTES_PATH}}` for route lookups:
      - **Extract Objective:** Read the feature file and find the "Objective" section. Extract the text of the objective.
      - **Extract Public Components:** Find the "Directory Structure" section within the same file. Identify all components listed directly at the root of the feature directory (i.e., not inside an `internal/` subdirectory).
      - **Map Routes:** For each public component, find its corresponding route in the table located in the sitemap/routes document loaded in step 1. Note if a component is embedded and has no direct route.

4.  **Format Each Feature Section:**

    - For each feature, create a formatted markdown block using the following structure. The feature name should be derived from the filename by replacing hyphens with spaces and capitalizing words.

    ```markdown
    ## [Feature Number]. [Formatted Feature Name] (`[feature-identifier]`)

    - **Objective:** [Extracted Objective]
    - **Public Components & Routes:**
      - `[ComponentA.tsx]`: `[Route for Component A]`
      - `[ComponentB.tsx]`: `(No direct route - embedded in headers/pages)`
    ```

5.  **Generate the Final Document:**
    - Concatenate all the formatted feature blocks you created in step 4.
    - Replace the `{{FEATURE_SECTIONS}}` placeholder in the template content with this concatenated string.
    - Save the final, complete markdown file to `{{OUTPUT_PATH}}`.

## Example Feature Block (for a feature file named `public-global-search.md`)

```markdown
## 2. Public Global Search (`public-global-search`)

- **Objective:** To enable public users to search across all content types from a single interface and view relevant, ranked results.
- **Public Components & Routes:**
  - `SearchResultsPage.tsx`: `/search`
  - `GlobalSearchInput.tsx`: (No direct route - embedded in headers/pages)
```
