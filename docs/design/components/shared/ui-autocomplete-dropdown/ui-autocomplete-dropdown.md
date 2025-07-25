# Component Spec: UiAutocompleteDropdown

## Role

The `UiAutocompleteDropdown` is a presentational component responsible for displaying a list of ingredient suggestions. It appears when the user starts typing in the `UiSearchIngredients` input field and allows the user to select an ingredient from the list.

## Role in Component Tree

`UiAutocompleteDropdown` is a child of the `UiSearchIngredients` component.

```
*   `UiSearchIngredients`
    *   `UiAutocompleteDropdown`
```

## Inputs (Props)

| Prop Name     | Type           | Description                                                   | Required |
| ------------- | -------------- | ------------------------------------------------------------- | -------- |
| `suggestions` | `Ingredient[]` | An array of ingredient objects to display as suggestions.     | Yes      |
| `isVisible`   | `boolean`      | Controls the visibility of the dropdown. Defaults to `false`. | No       |

## Outputs (Events)

| Event Name | Payload Type | Description                                       |
| ---------- | ------------ | ------------------------------------------------- |
| `select`   | `Ingredient` | Emitted when an ingredient suggestion is clicked. |

## States

### 1. Visible

- **Description:** The dropdown is visible and displays a list of suggestions.
- **Visuals:** A list of ingredients, each with an emoji and a name, is shown in a container with a dark background and a border.

### 2. Hidden

- **Description:** The dropdown is not visible.
- **Visuals:** The component is not rendered on the screen.
