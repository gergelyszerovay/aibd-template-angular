# Function Parameter Rules

- Use single object parameter with type alias for functions with multiple parameters
- Name the type alias as: `functionName` => `type functionNameParams`
- Example correct pattern:

```typescript
type ValidateUserParams = {
  email: string;
  age: number;
  preferences: UserPreferences;
};

function validateUser(params: ValidateUserParams): ValidationResult {
  const { email, age, preferences } = params;
  // Implementation
}
```

- Example incorrect pattern:

```typescript
function validateUser(
  email: string,
  age: number,
  preferences: UserPreferences
): ValidationResult {
  // Implementation
}
```

# Nested Function Rules

- Keep functions at the top level, avoid nested functions
- Example correct pattern:

```typescript
function validateEmail(email: string): boolean {
  return email.includes("@");
}

function formatName(name: string): string {
  return name.toUpperCase();
}

function processUserData(data: User): void {
  if (validateEmail(data.email)) {
    console.log(formatName(data.name));
  }
}
```

- Example incorrect pattern:

```typescript
function processUserData(data: User): void {
  function validateEmail(): boolean {
    return data.email.includes("@");
  }

  function formatName(): string {
    return data.name.toUpperCase();
  }

  if (validateEmail()) {
    console.log(formatName());
  }
}
```

- Allowed exceptions for nested functions:
  1. Arrow functions in callbacks
  2. Array method callbacks
  3. React component methods
- Example allowed exceptions:

```typescript
const numbers = [1, 2, 3].map((n) => n * 2);

useEffect(() => {
  const cleanup = () => {
    // Cleanup logic
  };
  return cleanup;
}, []);
```

# Function Documentation Rules

- Document functions using TSDoc comments
- Include purpose, parameters, return values, and important notes
- Example correct pattern:

```typescript
/**
 * Validates user data against business rules
 *
 * @remarks
 * This function performs comprehensive validation including:
 * - Email format
 * - Age restrictions
 * - Preference validation
 *
 * @param params - Validation parameters
 * @returns Validation result with any error messages
 * @throws {ValidationError} If the input is malformed
 * @see UserService for related functionality
 */
function validateUser(params: ValidateUserParams): ValidationResult {
  // Implementation
}
```

- Required TSDoc tags for functions:
  - `@param` - Documents function parameters
  - `@returns` - Documents return value
  - `@throws` - Documents exceptions that may be thrown
  - `@remarks` - Adds additional details
  - `@see` - References related code
  - `@deprecated` - Marks as deprecated
  - `@since` - Version when introduced
  - `@example` - Provides usage examples
