# Component Spec: UiRecipeGrid

## Role

The `UiRecipeGrid` component is responsible for displaying a collection of `UiRecipeCard` components in a responsive grid layout. It takes a list of recipes and renders them, handling the arrangement and spacing of the cards.

## Role in Component Tree

`UiRecipeGrid` is a child of the `MainLayout` component.

```
*   `MainLayout (Smart Component)`
    *   `UiRecipeGrid`
        *   `UiRecipeCard (xN)`
```

## Inputs (Props)

| Prop Name | Type       | Description                            | Required |
| --------- | ---------- | -------------------------------------- | -------- |
| `recipes` | `Recipe[]` | An array of recipe objects to display. | Yes      |

## Outputs (Events)

| Event Name | Payload Type | Description                                                  |
| ---------- | ------------ | ------------------------------------------------------------ |
| `select`   | `string`     | Emitted when a recipe card is clicked. Passes the recipe ID. |
