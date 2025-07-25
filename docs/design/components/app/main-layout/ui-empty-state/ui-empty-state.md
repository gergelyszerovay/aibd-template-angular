# Component Spec: UiEmptyState

## Role

The `UiEmptyState` component is displayed when a search yields no results. It informs the user that no matching recipes were found and provides suggestions for popular ingredients to try next.

## Role in Component Tree

`UiEmptyState` is a child of the `MainLayout` component and is conditionally rendered.

```
*   `MainLayout (Smart Component)`
    *   `UiEmptyState`
        *   `UiIngredientChip (xN) (shared)`
```

## Inputs (Props)

| Prop Name              | Type           | Description                               | Required |
| ---------------------- | -------------- | ----------------------------------------- | -------- |
| `suggestedIngredients` | `Ingredient[]` | A list of popular ingredients to suggest. | Yes      |

## Outputs (Events)

| Event Name  | Payload Type | Description                                            |
| ----------- | ------------ | ------------------------------------------------------ |
| `select`    | `string`     | Emitted when a suggested ingredient chip is clicked.   |
| `browseAll` | `void`       | Emitted when the "Browse All Recipes" link is clicked. |
