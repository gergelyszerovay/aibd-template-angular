# Component Spec: UiIngredientChip

## Role

The `UiIngredientChip` component is a small, interactive element that represents a single ingredient. It is used in two main contexts:

1.  **In the search bar:** To display the ingredients that the user has currently selected for their recipe search. In this context, it includes a "remove" button.
2.  **In the empty/error state:** To suggest popular ingredients that the user might want to try searching for. In this context, it acts as a button to select an ingredient for the search.

## Inputs (Props)

| Prop Name     | Type         | Description                                                                            | Required |
| ------------- | ------------ | -------------------------------------------------------------------------------------- | -------- |
| `ingredient`  | `Ingredient` | The ingredient object to display. See `docs/design/data-structures/ingredients.md`.    | Yes      |
| `color`       | `string`     | The color theme for the chip, used for hover effects (e.g., "yellow", "orange").       | No       |
| `isRemovable` | `boolean`    | A boolean that determines whether to display the "remove" button. Defaults to `false`. | No       |

## Outputs (Events)

| Event Name | Payload Type | Description                                                                                                   |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `remove`   | `string`     | Emitted when the "remove" button is clicked. Passes the `ingredient.name` string as a payload.                |
| `select`   | `string`     | Emitted when the chip is clicked in the suggestion context. Passes the `ingredient.name` string as a payload. |

## States
