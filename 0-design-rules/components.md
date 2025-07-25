# Component Design Guidelines

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

## 1. Introduction

This document provides guidelines for creating and organizing component design specifications within this project. Adhering to these rules ensures that our design documentation is consistent, predictable, and easy to navigate.

## 2. Component Organization

### 2.1. The Component Tree as the Source of Truth

The `/workspace/docs/design/component-tree.md` file is the single source of truth for the application's component hierarchy.

1.  Every component with a design specification **MUST** be listed in `component-tree.md`.
2.  The directory structure within `/workspace/docs/design/components` **MUST** mirror the hierarchy defined in `component-tree.md`.

### 2.2. Directory Structure

The organization of component specifications within the `/workspace/docs/design/components` directory **MUST** follow these rules:

1.  **Shared vs. App Components:**

    - General-purpose, reusable components **MUST** be placed in the `docs/design/components/shared/` directory. These are typically "dumb" presentational components (e.g., `UiTag`, `UiIngredientChip`).
    - Application-specific components that compose shared components into larger features **MUST** be placed in the `docs/design/components/app/` directory. These are often "smart" container components (e.g., `MainLayout`).

2.  **Directory and File Naming:**
    - Each component **MUST** have its own directory. The directory name **MUST** match the component's name exactly (e.g., `ui-recipe-card`).
    - The component specification file **MUST** be a Markdown file named after the component (e.g., `ui-recipe-card.md`).
    - If Component B is a child of Component A in the `component-tree.md`, then the directory for Component B **MUST** be nested inside the directory for Component A.

**Example:**

Given this tree structure in `component-tree.md`:

```
*   `UiRecipeGrid`
    *   `UiRecipeCard (xN)`
```

The corresponding directory structure **MUST** be:

```
docs/design/components/app/main-layout/ui-recipe-grid/
├── ui-recipe-grid.md
└── ui-recipe-card/
    └── ui-recipe-card.md
```

### 2.3. Component Naming and Types

#### Smart vs. Dumb Components

- **Smart Components:** These components are concerned with _how things work_. They manage application state, fetch data, and are aware of the broader application context. They are often placed in the `app/` directory. `MainLayout` is an example of a smart component.
- **Dumb Components:** These components are concerned with _how things look_. They are presentational, receive data via props, and emit events when the user interacts with them. They are not aware of the application's state. For the same input values (props), they **MUST** always render the same output. Dumb components **SHOULD** be highly reusable.

#### Naming Conventions

1.  All "Dumb" components **MUST** be prefixed with `Ui` (e.g., `UiRecipeCard`, `UiButton`).
2.  "Smart" components **SHOULD NOT** have a prefix (e.g., `MainLayout`).

### 2.4. Component Tree Notation

The `component-tree.md` file uses specific notation to clarify the role and behavior of components in the hierarchy.

- **`(shared)`**: This indicates that the component is a reusable, "dumb" component defined in the `docs/design/components/shared/` directory.
- **`(xN)`**: This indicates that multiple instances of the component can be rendered. For example, `UiRecipeCard (xN)` means the grid can display _N_ number of recipe cards.
- **`(conditional)` or `(conditionally rendered)`**: This indicates that the component or a group of components is not always visible. Its rendering is dependent on the application's state. For example, `UiEmptyState` is only shown when a search yields no results.

## 3. Component Specification Template

All new component specification files **SHOULD** adhere to the following template.

---

```markdown
# Component Spec: [Component Name]

## Role

A brief, one-sentence description of the component's primary responsibility.

## Role in Component Tree

A small snippet from `component-tree.md` showing where this component fits.

`[Paste snippet here]`

## Inputs

This section is **REQUIRED** if the component accepts properties. Every property **MUST** either be marked as `Required: Yes` or have a value specified in the `Default` column.

The data types used for props **SHOULD** adhere to the models defined in `/workspace/docs/design/data-structures/`. For more detail, see the [Data Structure Guidelines](/workspace/0-design-rules/data-structures.md).

| Prop Name      | Type      | Default | Description                           | Required |
| -------------- | --------- | ------- | ------------------------------------- | -------- |
| `propName`     | `string`  | `n/a`   | A description of what this prop does. | Yes      |
| `optionalProp` | `boolean` | `false` | A description of an optional prop.    | No       |

## Outputs

This section is **REQUIRED** if the component emits events.

| Event Name  | Payload Type | Description                                  |
| ----------- | ------------ | -------------------------------------------- |
| `eventName` | `string`     | A description of when this event is emitted. |

## States

This section **SHOULD** describe the different visual states the component can be in. Each state **SHOULD** include a description and **MAY** include a visual reference if helpful.

### 1. [State Name]

- **Description:** A description of this state.
- **Visuals:** A description of the visual changes in this state.
```

### Visual Reference

This section **SHOULD** be included if a visual example of the component exists in a static prototype.

- **Prototype:** `[Link to the .html file]`
- **Notes:** (Optional) Any specific notes, like `Search for data-component="ComponentName"`

## 4. Framework-Agnostic Design

The component designs and specifications in this project **MUST** be framework-agnostic. They define the structure, props, events, and states of a component, but not its implementation details.

This approach ensures that the design can be implemented in any modern, component-based frontend framework (e.g., Angular, React, Vue, Svelte) without changes to the core design itself. The implementation details are left to the development phase.

## 5. Static HTML Prototypes and Prototyping

To aid in visualizing the component architecture, this project uses static HTML prototypes.

### 5.1. The Role of Static HTML Prototypes

HTML files located in `/workspace/docs/design/html-prototypes/` (e.g., `cards1.html`) serve as non-interactive, high-fidelity prototypes.

1.  These prototypes **SHOULD** be used to explore the visual and structural aspects of the component design.
2.  They **ARE NOT** functional applications. They are static representations.
3.  They **MUST NOT** be considered a source of truth for component implementation; the markdown component specifications are the source of truth.

### 5.2. The `data-component` Attribute

Within the static prototypes, elements are marked with a `data-component` attribute to explicitly associate them with a component defined in the design specifications.

**Example:**

```html
<div class="grid" data-component="UiRecipeGrid">
  <div class="card" data-component="UiRecipeCard">...</div>
</div>
```

### 5.3. The Component Highlighter Tool

The project includes a utility to help visualize this component structure directly in the browser.

- **Purpose:** The highlighter tool scans the HTML for `data-component` attributes and provides an interface to toggle visual outlines for each component.
- **Usage:** When you open a static prototype in a browser, a button will appear in the bottom-right corner. Clicking this button opens a panel that lists all identified components, allowing you to highlight them on the page.
- **Documentation:** For more details, see the tool's documentation at `/workspace/docs/design/html-prototypes/component-highlighter/README.md`.
