# Component Spec: UiRecipeCard

## Role

The `UiRecipeCard` component displays a summary of a single recipe, including its image, name, a brief description, and a list of tags. It is designed to be visually appealing and to provide enough information for a user to decide if they are interested in viewing the full recipe.

## Role in Component Tree

`UiRecipeCard` is a child of the `UiRecipeGrid` component.

```
*   `UiRecipeGrid`
    *   `UiRecipeCard (xN)`
        *   `UiTagList (shared)`
```

## Inputs (Props)

| Prop Name | Type     | Description                   | Required |
| --------- | -------- | ----------------------------- | -------- |
| `recipe`  | `Recipe` | The recipe object to display. | Yes      |

## Outputs (Events)

None. User interactions are handled by the parent `UiRecipeGrid`.
