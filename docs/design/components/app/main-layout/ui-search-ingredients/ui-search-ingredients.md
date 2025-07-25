# Component Spec: UiSearchIngredients

## Role

The `UiSearchIngredients` component provides the main search interface for the application. It allows users to select ingredients and see the list of matching recipes update in real-time. It includes an input field with autocomplete suggestions and displays the currently selected ingredients as a list of chips.

## Role in Component Tree

`UiSearchIngredients` is a child of the `MainLayout` component.

```
*   `MainLayout (Smart Component)`
    *   `UiSearchIngredients`
        *   `UiIngredientChip (xN) (shared)`
```

## Inputs (Props)

| Prop Name              | Type           | Description                                                           | Required |
| ---------------------- | -------------- | --------------------------------------------------------------------- | -------- |
| `availableIngredients` | `Ingredient[]` | The full list of ingredients to be used for autocomplete suggestions. | Yes      |
| `selectedIngredients`  | `Ingredient[]` | The list of ingredients that the user has currently selected.         | Yes      |

## Outputs (Events)

| Event Name | Payload Type   | Description                                            |
| ---------- | -------------- | ------------------------------------------------------ |
| `change`   | `Ingredient[]` | Emitted when the list of selected ingredients changes. |

## States

- **Default:** The standard appearance of the search bar.
- **Focused:** When the user has clicked into the input field.
- **With Suggestions:** When autocomplete suggestions are visible.
