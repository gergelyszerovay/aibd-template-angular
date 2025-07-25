# Component Spec: UiIngredientChip

## Role

The `UiIngredientChip` component is a small, interactive element that represents a single ingredient. It is used in two main contexts:

1.  **In the search bar:** To display the ingredients that the user has currently selected for their recipe search. In this context, it includes a "remove" button.
2.  **In the empty/error state:** To suggest popular ingredients that the user might want to try searching for. In this context, it acts as a button to select an ingredient for the search.

## Inputs (Props)

| Prop Name     | Type       | Description                                                                                    | Required |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------- | -------- |
| `ingredient`  | `string`   | The name of the ingredient to display (e.g., "banana", "mango").                               | Yes      |
| `emoji`       | `string`   | The emoji associated with the ingredient (e.g., "🍌", "🥭").                                   | No       |
| `color`       | `string`   | The color theme for the chip, used for hover effects (e.g., "yellow", "orange").               | No       |
| `onRemove`    | `function` | A callback function that is triggered when the user clicks the "remove" button.                | No       |
| `onSelect`    | `function` | A callback function that is triggered when the user clicks the chip in the suggestion context. | No       |
| `isRemovable` | `boolean`  | A boolean that determines whether to display the "remove" button. Defaults to `false`.         | No       |

## Outputs (Events)

| Event Name | Description                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `remove`   | Emitted when the "remove" button is clicked. Passes the `ingredient` as a payload.                |
| `select`   | Emitted when the chip is clicked in the suggestion context. Passes the `ingredient` as a payload. |

## States

1.  **Default:** The standard appearance of the chip.
2.  **Hover:** The chip's border and text color change to a theme color on hover.
3.  **Removable:** A version of the chip that includes a small "x" icon to remove it from a selection.
4.  **Interactive (Suggestion):** A version of the chip that acts as a button to add an ingredient to a search.

## Examples

### Removable (in search bar)

```html
<span class="ingredient-tag px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center gap-2">
  <span>🍌</span>
  <span>banana</span>
  <button onclick="removeIngredient('banana')" class="hover:bg-white hover:bg-opacity-10 rounded-full p-0.5 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  </button>
</span>
```

### Suggestion (in empty state)

```html
<button onclick="addSuggestedIngredient('banana')" class="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition-all">🍌 Banana</button>
```
