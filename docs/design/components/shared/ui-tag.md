# Component Spec: UiTag

## Role

The `UiTag` component is a small, non-interactive element used to display a category or keyword associated with a recipe. It provides a quick visual cue about the nature of the smoothie (e.g., "Vegan", "Summer", "Breakfast"). It is typically used within a `UiTagList` component.

## Inputs (Props)

| Prop Name | Type     | Description                                                             | Required |
| --------- | -------- | ----------------------------------------------------------------------- | -------- |
| `label`   | `string` | The text to display within the tag (e.g., "Vegan").                     | Yes      |
| `color`   | `string` | The color theme for the tag, used for the background (e.g., "emerald"). | No       |

## Outputs (Events)

None. This is a display-only component.

## States

1.  **Default:** The standard appearance of the tag with a colored background and text.

## Example

This component is implemented in the `cards1.html` design draft. You can find examples of its usage by searching for the `data-component="UiTag"` attribute in that file.

Here is an example from a recipe card:

```html
<span class="px-2 py-1 bg-emerald-800 text-white text-xs font-medium rounded-full" data-component="UiTag">Vegan</span>
```
