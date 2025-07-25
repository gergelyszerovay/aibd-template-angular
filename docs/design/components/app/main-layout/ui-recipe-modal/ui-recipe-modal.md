# Component Spec: UiRecipeModal

## Role

The `UiRecipeModal` component displays the full details of a selected recipe in a modal overlay. It includes the recipe's image, a list of ingredients, preparation instructions, pro tips, and tags. The modal can be closed by the user.

## Role in Component Tree

`UiRecipeModal` is a child of the `MainLayout` component and is conditionally rendered.

```
*   `MainLayout (Smart Component)`
    *   `UiRecipeModal (conditionally rendered)`
        *   `UiTagList (shared)`
```

## Inputs (Props)

| Prop Name | Type     | Description                                                   | Required |
| --------- | -------- | ------------------------------------------------------------- | -------- |
| `recipe`  | `Recipe` | The recipe object to display. If `null`, the modal is hidden. | Yes      |

## Outputs (Events)

| Event Name | Payload Type | Description                             |
| ---------- | ------------ | --------------------------------------- |
| `close`    | `void`       | Emitted when the user closes the modal. |
