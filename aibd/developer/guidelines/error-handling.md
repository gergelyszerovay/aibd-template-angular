# Rule: Use union types for error handling instead of wrapper Result types

When handling operations that can fail, prefer union types with Error objects over wrapper Result types.

## Good Example

```typescript
type UserResult = User | Error;

async function fetchUser(id: string): Promise<UserResult> {
  try {
    const response = await api.get(`/users/${id}`);
    return UserResponseSchema.parse(response.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Error(`Invalid user data format: ${error.errors.map(e => `${e.path}: ${e.message}`).join(', ')}`);
    }
    return new Error(`Failed to fetch user with ID ${id}`);
  }
}
```

## Explanation

- Union types (T | Error) provide type safety and clear return types
- This pattern is more idiomatic in TypeScript than wrapper Result types
- Error objects should contain meaningful error messages

# Rule: Use Error subclasses in specific scenarios

Create custom Error subclasses when:

1. Errors are central to your domain model
2. You need strict typing for error properties
3. You have complex error hierarchies
4. Errors are exposed in public APIs

## Good Example

```typescript
class AppError extends Error {
  public readonly timestamp: Date;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.timestamp = new Date();
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class ValidationError extends AppError {
  constructor(
    message: string,
    public readonly field: string,
    public readonly value: unknown,
    public readonly constraint: string
  ) {
    super(message);
  }

  toResponseFormat(): Record<string, unknown> {
    return {
      field: this.field,
      message: this.message,
      constraint: this.constraint
    };
  }
}
```

## Explanation

- Use a base error class for common functionality
- Add typed properties to communicate error details
- Fix prototype chain for proper instanceof checks
- Add helper methods for common operations (e.g., formatting for API responses)
