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

| Prop Name | Type     | Description                                                      | Required |
| --------- | -------- | ---------------------------------------------------------------- | -------- |
| `tags`    | `array`  | An array of strings or objects representing the tags to display. | Yes      |
| `colors`  | `object` | An object mapping tag labels to color themes.                    | No       |

## Outputs (Events)

None. This is a display-only component.

## Example

```html
<div class="flex flex-wrap gap-2">
  <span class="px-2 py-1 bg-emerald-800 text-white text-xs font-medium rounded-full">Vegan</span>
  <span class="px-2 py-1 bg-orange-800 text-white text-xs font-medium rounded-full">Summer</span>
  <span class="px-2 py-1 bg-purple-800 text-white text-xs font-medium rounded-full">Breakfast</span>
</div>
```
