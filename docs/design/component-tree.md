### Shared (Reusable Components)

- `UiIngredientChip (shared)`
- `UiTag (shared)`
- `UiTagList (shared)`
  - `UiTag (xN) (shared)`

### App (Application Structure)

- `MainLayout (Smart Component)`
  - `UiHeroSection`
  - `UiSearchIngredients`
    - `UiIngredientChip (xN) (shared)`
  - `(Conditional)`
    - `UiRecipeGrid`
      - `UiRecipeCard (xN)`
        - `UiTagList (shared)`
    - `UiEmptyState`
      - `UiIngredientChip (xN) (shared)`
  - `UiRecipeModal (conditionally rendered)`
    - `UiTagList (shared)`
