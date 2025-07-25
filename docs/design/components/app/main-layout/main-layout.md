# Component Spec: MainLayout

## Role

The `MainLayout` component is the top-level container for the entire application. It defines the overall structure, including the header, main content area, and footer, ensuring a consistent layout across all pages. It is a smart component that manages the main state of the application.

## Role in Component Tree

`MainLayout` is the root component of the application's UI.

```
*   `MainLayout (Smart Component)`
    *   `UiHeroSection`
    *   `UiSearchIngredients`
    *   `(Conditional)`
        *   `UiRecipeGrid`
        *   `UiEmptyState`
    *   `UiRecipeModal (conditionally rendered)`
```

## Inputs (Props)

None. This component is the root of the application and does not receive props from a parent.

## Outputs (Events)

None.

## States

- **Loading:** The initial state when the application is fetching recipe data.
- **Ready:** The state when the recipe data has been loaded and the UI is interactive.
- **Error:** The state when there is an issue fetching the recipe data.
