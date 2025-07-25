# HTML Prototype Component Overview

This document provides a high-level overview of the component structures used in the static HTML prototypes.

## 1. `cards1.html`

This prototype demonstrates the main application layout, including the search functionality and the recipe grid.

### Component Tree

```
- MainLayout
  - UiHeroSection
  - UiSearchIngredients
    - UiIngredientChip (xN)
  - UiRecipeGrid
    - UiRecipeCard (xN)
      - UiTagList
        - UiTag (xN)
  - UiRecipeModal
    - UiTagList
      - UiTag (xN)
```

## 2. `empty1.html`

This prototype shows the application's empty state, which is displayed when a search returns no results.

### Component Tree

```
- UiEmptyState
  - UiIngredientChip (xN)
```
