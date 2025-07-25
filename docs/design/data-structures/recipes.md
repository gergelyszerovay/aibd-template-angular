# Recipe Data Structure

The `Recipe` object contains all the information needed to display a single smoothie recipe, including its name, description, ingredients, and pro tips.

| Property      | Type           | Description                                                         |
| ------------- | -------------- | ------------------------------------------------------------------- |
| `id`          | `string`       | A unique identifier for the recipe (e.g., "berry-banana-smoothie"). |
| `name`        | `string`       | The display name of the smoothie.                                   |
| `description` | `string`       | A brief summary of the smoothie's flavor and benefits.              |
| `servings`    | `number`       | The number of servings the recipe yields.                           |
| `prepTime`    | `string`       | The estimated preparation time (e.g., "5 minutes").                 |
| `difficulty`  | `string`       | The difficulty level of the recipe (e.g., "easy").                  |
| `ingredients` | `Ingredient[]` | An array of ingredient objects.                                     |
| `proTips`     | `string[]`     | An array of helpful tips for preparing the smoothie.                |
| `tags`        | `string[]`     | An array of tags for categorizing the recipe.                       |

## Ingredient Data Structure

| Property | Type     | Description                                     |
| -------- | -------- | ----------------------------------------------- |
| `name`   | `string` | The name of the ingredient (e.g., "banana").    |
| `amount` | `string` | The quantity of the ingredient (e.g., "1").     |
| `unit`   | `string` | The unit of measurement (e.g., "large", "cup"). |

## TypeScript Types

```typescript
export type Ingredient = {
  readonly name: string;
  readonly amount: string;
  readonly unit: string;
};

export type Recipe = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly servings: number;
  readonly prepTime: string;
  readonly difficulty: string;
  readonly ingredients: readonly Ingredient[];
  readonly proTips: readonly string[];
  readonly tags: readonly string[];
};
```
