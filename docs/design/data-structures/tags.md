# Tag Data Structure

The `Tag` object contains the name and color for a single tag.

| Property | Type     | Description                                          |
| -------- | -------- | ---------------------------------------------------- |
| `name`   | `string` | The display name of the tag (e.g., "Vegan").         |
| `color`  | `string` | The color associated with the tag (e.g., "emerald"). |

## TypeScript Type

```typescript
export type Tag = {
  readonly name: string;
  readonly color: string;
};
```
