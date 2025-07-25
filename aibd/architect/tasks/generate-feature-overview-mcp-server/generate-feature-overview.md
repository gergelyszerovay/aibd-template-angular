# Task: Generate MCP Server Feature Overview Document

## Objective

To generate a comprehensive feature overview document for an MCP server project, organized into three distinct sections:

1.  **Tool-Providing Features**: Core features from `src/features` that expose functions as tools.
2.  **Other Core Features**: Core features from `src/features` that do not directly expose tools but provide essential application logic.
3.  **Shared Features**: Reusable components and utilities from `src/shared`.

This involves reading all individual feature definitions, analyzing their source code to identify their category and functionalities, and creating a unified summary based on a provided template.

## Placeholders to Provide

Before running this task, replace the following placeholders with project-specific values:

- `{{PROJECT_NAME}}`: The name of the project (e.g., "Private MCP Cloud Code Agent").
- `{{FEATURE_PRD_DIR_PATH}}`: The absolute path to the directory containing feature definition markdown files (`/workspace/docs/feature-level-prd/`).
- `{{FEATURE_SRC_DIR_PATH}}`: The absolute path to the directory containing the core feature source code (`/workspace/src/features/`).
- `{{SHARED_SRC_DIR_PATH}}`: The absolute path to the directory containing the shared feature source code (`/workspace/src/shared/`).
- `{{TEMPLATE_PATH}}`: The absolute path to the template file to use (`/workspace/aibd/architect/tasks/generate-feature-overview-mcp-server/feature-overview.template.prd`).
- `{{OUTPUT_PATH}}`: The absolute path where the final generated overview document will be saved (`/workspace/docs/overview/features.md`).

## Context & Persona

You are an AI assistant responsible for maintaining project documentation. Your task is to synthesize information from multiple source files into a single, structured overview document that is functionally useful to developers. You must be precise, follow the specified format exactly, and ensure the generated document accurately reflects the capabilities of the source code.

## Process

1.  **Read Template:**

    - Load the content from `{{TEMPLATE_PATH}}` and replace `{{PROJECT_NAME}}`.

2.  **Process Core Features (`{{FEATURE_SRC_DIR_PATH}}`):**

    - Identify all feature subdirectories within the path.
    - For each feature, perform the following analysis:
      - **Read PRD:** Load the corresponding PRD from `{{FEATURE_PRD_DIR_PATH}}` to extract the **Objective**.
      - **Analyze Public API:** Identify public API files (`*.ts` at the feature root).
      - **Extract Tools:** Read the source code of public files and find all exported functions that return an `McpTool` object. A feature is considered "Tool-Providing" if it exports at least one such function.
    - **Categorize Features:**
      - If a feature exports `McpTool` objects, add it to the "Tool-Providing Features" list.
      - Otherwise, add it to the "Other Core Features" list.

3.  **Process Shared Features (`{{SHARED_SRC_DIR_PATH}}`):**

    - Identify all subdirectories within the path (e.g., `core`, `mcp-tool`). These are the shared features.
    - For each shared feature, determine its purpose from its name and the files within it.

4.  **Generate `{{TOOL_FEATURES_SECTION}}` Content:**

    - For each feature in the "Tool-Providing" list, format it as follows. To get the `Schema Definition`, find the Zod schema variable referenced by the tool's `inputSchema` property and extract its source code.
      ````markdown
      ### [Feature Name] (`[feature-identifier]`)
      - **Objective:** [Extracted Objective]
      - **Provided Tools:**
        - **`[tool.name]`**: [tool.description]
          - **Input Schema:** `[tool.inputSchemaName]`
          - **Schema Definition:**
            ```typescript
            // The source code for the Zod schema
            export const [tool.inputSchemaName] = z.object({
              // ... zod schema definition ...
            });
            ```
          - **Output:** `[tool.outputTypes joined by ", "]` (e.g., text, json)
          - **JSON Output Schema:** `[tool.jsonOutputSchemaName]` (if applicable)
      ````

5.  **Generate `{{OTHER_FEATURES_SECTION}}` Content:**

    - For each feature in the "Other Core Features" list, format it as follows:
      ```markdown
      ### [Feature Name] (`[feature-identifier]`)
      - **Objective:** [Extracted Objective]
      ```

6.  **Generate `{{SHARED_FEATURES_SECTION}}` Content:**

    - For each shared feature, format it as follows:
      ```markdown
      ### [Shared Feature Name]
      - **Purpose:** [Brief, auto-generated summary of the feature's role.]
      ```

7.  **Generate the Final Document:**
    - Assemble the three sections.
    - Replace the corresponding placeholders (`{{TOOL_FEATURES_SECTION}}`, `{{OTHER_FEATURES_SECTION}}`, `{{SHARED_FEATURES_SECTION}}`) in the template.
    - Save the final markdown file to `{{OUTPUT_PATH}}`.

## Example

````markdown
# 1. Tool-Providing Features
### Agent Parser (`agent-parser`)
- **Objective:** ...
- **Provided Tools:**
  - **`parse_agent_file`**: Parses a single agent definition file.
    - **Input Schema:** `ParseAgentFileParamsSchema`
    - **Schema Definition:**
      ```typescript
      // The source code for the Zod schema
      export const ParseAgentFileParamsSchema = z.object({
        // ... zod schema definition ...
      });
      ```
    - **Output:** `json`
    - **JSON Output Schema:** `AgentDefinition`

# 2. Other Core Features
### Main (`main`)
- **Objective:** ...

# 3. Shared Features
### Core
- **Purpose:** Provides core utilities and type guards used across the application.
````
