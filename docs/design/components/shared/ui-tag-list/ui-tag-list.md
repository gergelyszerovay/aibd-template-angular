# Component Spec: UiTagList

## Role

The `UiTagList` component is a container for displaying a collection of `UiTag` components. It arranges the tags in a horizontal list with appropriate spacing. It is used on recipe cards and in the recipe modal to show all the categories a recipe belongs to.

## Role in Component Tree

`UiTagList` is a container component that renders multiple `UiTag` components.

```
*   `UiTagList (shared)`
    *   `UiTag (xN) (shared)`
```

## Inputs (Props)

| Prop Name | Type    | Description                                                                    | Required |
| --------- | ------- | ------------------------------------------------------------------------------ | -------- |
| `tags`    | `Tag[]` | An array of tag objects to display. See `docs/design/data-structures/tags.md`. | Yes      |

## Outputs (Events)

None. This is a display-only component.

## Example

This component is implemented in the `cards1.html` design draft. You can find examples of its usage by searching for the `data-component="UiTagList"` attribute in that file.

The primary example is in the recipe card.
