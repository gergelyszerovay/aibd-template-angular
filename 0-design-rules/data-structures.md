# Data Structure Guidelines

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

## 1. Introduction

This document provides guidelines for defining and documenting data structures used within the application. Consistent data modeling is crucial for predictable state management and clear communication between components.

## 2. Immutability

Data structures **SHOULD** be immutable.

1.  **Rationale:** Using immutable data structures prevents accidental side effects and makes state changes explicit and predictable. This is a core principle for ensuring the application is maintainable and scalable.
2.  **Implementation:** In TypeScript, this **SHOULD** be enforced by using the `readonly` keyword for all properties and for arrays (e.g., `readonly string[]`).

**Example:**

```typescript
export type Tag = {
  readonly name: string;
  readonly color: string;
};
```

## 3. Documentation

1.  Every data structure used by the application **MUST** be documented in a dedicated markdown file within the `/workspace/docs/design/data-structures/` directory.
2.  Each documentation file **SHOULD** include:
    - A brief description of the data structure's role.
    - A table defining each property, its type, and a description.
    - A TypeScript type definition showing the immutable structure.

## 4. Normalization

Data **SHOULD** be normalized where appropriate.

1.  **Rationale:** Normalization avoids data duplication and ensures that there is a single source of truth for each piece of information. For example, instead of embedding full `Ingredient` objects inside a `Recipe` object, the `Recipe` can store an array of ingredient IDs, and a separate, top-level state slice can manage the master list of all ingredients.
2.  **Flexibility:** This is a "SHOULD", not a "MUST". For simple applications or where data is not relational, denormalization is acceptable. The decision **SHOULD** be made based on the complexity of the data and the needs of the application.
