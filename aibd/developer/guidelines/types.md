# Rules for Type Declarations

1. Use type aliases instead of interfaces.

   - CORRECT: `type User = { id: number; name: string; };`
   - INCORRECT: `interface User { id: number; name: string; }`
   - REASON: Type aliases provide better consistency and flexibility.

2. Always include explicit type annotations for:

   - Function parameters
   - Function return types
   - Variable declarations
   - Class properties
   - CORRECT:
     ```typescript
     type User = { id: number; name: string; };
     const userData: User = { id: 1, name: "John" };
     function processUser(user: User): number { return user.id; }
     ```
   - INCORRECT:
     ```typescript
     const userData = { id: 1, name: "John" };
     function processUser(user) { return user.id; }
     ```
   - EXCEPTIONS:
     - Loop variables in simple `for` loops
     - Variables with literal values when literal type is desired
     - Object destructuring in typed function parameters

3. Document types using TSDoc comments.

   - For complex types, document both the type itself and its properties
   - CORRECT:
     ```typescript
     /**
      * Represents a user in the system
      * @see UserService for CRUD operations
      */
     type User = {
       /** Unique identifier for the user */
       id: number;
       /** Full display name of the user */
       name: string;
     };
     ```
   - USE these TSDoc tags for types:
     - `@deprecated` - For deprecated types/properties
     - `@remarks` - For additional details
     - `@see` - For references to related code
     - `@since` - For version when introduced
     - `@defaultValue` - For default values
     - `@example` - For usage examples

4. Declare each variable separately.

   - CORRECT:
     ```typescript
     let a: number;
     let b: string;
     let x = 1;
     let y = 2;
     ```
   - INCORRECT:
     ```typescript
     let a, b;
     let x = 1, y = 2;
     ```

5. Use `import type` for type-only imports.

   - CORRECT:
     ```typescript
     import type { UserProfile } from "./UserProfile";
     import { validateUser } from "./validateUser";
     ```
   - INCORRECT:
     ```typescript
     import { UserProfile } from "./UserProfile";
     ```
   - BENEFITS:
     - Separates runtime from compile-time dependencies
     - Improves tree-shaking
     - Makes circular dependencies easier to spot

6. Implement type guards for union types.
   - CORRECT:

     ```typescript
     function isError(result: unknown): result is Error {
       return result instanceof Error;
     }

     async function displayUserProfile(userId: string): Promise<void> {
       const result = await fetchUser(userId);
       if (isError(result)) {
         console.error(`Failed to load user: ${result.message}`);
         return;
       }
       console.log(`Loaded profile for ${result.name}`);
     }
     ```
