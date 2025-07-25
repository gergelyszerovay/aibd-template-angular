# Feature-Level PRD Guideline

This document outlines the requirements for creating and maintaining Product Requirements Documents (PRDs) for all features.

## 1. PRD Requirement

Every feature located under `/src/features/` and every shared feature or component in `/src/shared/` **MUST** have a corresponding PRD file. This PRD serves as the authoritative source of truth for its requirements, scope, and design.

## 2. PRD Storage Location

All PRDs **MUST** be stored in the following directory:
`/workspace/docs/feature-level-prd/`

This centralized location ensures that all PRDs are easily accessible for review, planning, and reference.

## 3. Naming Convention

The filename for each PRD **MUST** follow the conventions below.

### Standard Features

For features located in `/src/features/`, the filename **MUST** directly correspond to the name of its associated feature directory.

**Format:** `<feature-directory-name>.md`

**Example:**

- For a feature at `/src/features/user-authentication/`, the PRD file is:
  `/workspace/docs/feature-level-prd/user-authentication.md`

### Shared Features and Components

For features or components located in `/src/shared/`, the filename **MUST** be prefixed with `shared-`.

**Format:** `shared-<directory-name>.md`

**Example:**

- For a shared component at `/src/shared/data-table/`, the PRD file is:
  `/workspace/docs/feature-level-prd/shared-data-table.md`

## 4. Blueprint Reference

The very first line of every PRD file **MUST** declare the blueprint it is based on. This provides immediate context on the type of feature being described.

**Format:**
`Based on: <blueprint-name>`

**Available Blueprints:**
The blueprint name is derived from the directories located in `/workspace/aibd/blueprints/`.

For this project, the authoritative list of enabled blueprints is defined in the following YAML file:
`/workspace/docs/project-level-docs/enabled-blueprints.yml`

This file ensures that all developers are using a consistent and approved set of blueprints for PRD generation.

**Example:**
A PRD for a new utility feature would start with the following line:

```markdown
Based on: utility
```

## 5. PRD Content

The content of the PRD **MUST** follow the structure defined in the corresponding blueprint's template and checklist, located at:
`/workspace/aibd/blueprints/<blueprint-name>/`

Developers **MUST** use the `feature-level-prd.template.md` as the starting point for their PRD and ensure it passes all checks in the `feature-level-prd.checklist.md`.
