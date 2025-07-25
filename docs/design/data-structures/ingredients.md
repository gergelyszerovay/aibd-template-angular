# Ingredient Data Structure

The `Ingredient` object contains the name and emoji for a single ingredient.

| Property | Type     | Description                                          |
| -------- | -------- | ---------------------------------------------------- |
| `name`   | `string` | The display name of the ingredient (e.g., "Banana"). |
| `emoji`  | `string` | The emoji representing the ingredient (e.g., "🍌").  |

## TypeScript Type

```typescript
export type Ingredient = {
  readonly name: string;
  readonly emoji: string;
};
```
