# Schema Validation with Zod

1. Create a dedicated type definition file (e.g., `User.ts`) with properly documented type:

```typescript
// User.ts
/**
 * Defines the structure of a User
 */
export type User = {
  /** Unique identifier */
  id: number;
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** User's age */
  age?: number;
};
```

2. Create a separate schema file (e.g., `UserSchema.ts`) with:
   - Imported z from zod
   - Type import from dedicated type file
   - Schema definition using z.object()
   - Type compatibility checks (both exhaustive and reverse)
   - Validation function that uses the schema

```typescript
// UserSchema.ts
import { z } from "zod";
import type { User } from "./User";

/**
 * Schema for runtime validation of User type
 */
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(0).optional(),
});

// Type compatibility checks, don't export them
const UserSchemaExhaustiveCheck: z.infer<typeof UserSchema> = {} as User;
const UserSchemaReverseCheck: User = {} as z.infer<typeof UserSchema>;

function validateUser(data: unknown): User {
  return UserSchema.parse(data);
}
```

3. Schema organization rules:

   - Define types explicitly in separate files, never use `z.infer` as primary type definition
   - Include type compatibility checks with format `{TypeName}SchemaExhaustiveCheck` and `{TypeName}SchemaReverseCheck`
   - Always implement both exhaustive and reverse type checks
   - Compose schemas for complex objects

4. Schema composition pattern:

```typescript
// AddressSchema.ts
import { z } from "zod";

export type Address = {
  street: string;
  city: string;
  zipCode: string;
};

export const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
});

// Type compatibility checks
const AddressSchemaExhaustiveCheck: z.infer<typeof AddressSchema> = {} as Address;
const AddressSchemaReverseCheck: Address = {} as z.infer<typeof AddressSchema>;

// UserSchema.ts with composed schemas
import { AddressSchema, Address } from "./AddressSchema";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  address: AddressSchema,
});
```
