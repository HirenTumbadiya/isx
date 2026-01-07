# isx

Tiny, **intent-based** string validation for JavaScript and TypeScript. Zero dependencies, extremely lightweight, and tree-shakeable.

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/isx-intent.svg)](https://www.npmjs.com/package/isx-intent)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/isx-intent)](https://bundlephobia.com/package/isx-intent)

## 🚀 Overview

`isx` is designed for developers who want clear, readable, and type-safe string validation. Instead of writing complex regex for every project, use `isx` to express your **intent**.

- **Tiny**: No dependencies, minimal footprint.
- **Type-Safe**: Written in TypeScript with full support for Type Guards and Assertion Functions.
- **Modular**: Only bundle what you use.

## 📦 Installation

```bash
npm install isx-intent
# or
yarn add isx-intent
# or
pnpm add isx-intent
```

## 🛠️ Usage

### Boolean Validation (`isx`)
Returns `true` if valid, `false` otherwise. Acts as a Type Guard.

```typescript
```typescript
import { isx } from 'isx-intent';

if (isx.email('hello@world.com')) {
  // TypeScript knows value is a valid email string here
}

isx.url('https://google.com'); // true
isx.port(8080);               // true
isx.uuid('f47ac10b...');     // true
```

### Assertion Validation (`assert`)
Throws a `ValidationError` if the check fails. Useful for flow control and early returns.

```typescript
```typescript
import { assert } from 'isx-intent';

try {
  assert.email(userInput);
  // Proceed with confidence
} catch (error) {
  console.log(error.message); // "Invalid email address"
  console.log(error.code);    // "INVALID_EMAIL"
}
```

---

## 📚 API Reference

### Identity & Web
- `email(value)`: Validates email format.
- `url(value)`: Validates URL format (supports localhost and ports).
- `ip(value, version?)`: Validates IPv4 or IPv6.
- `fqdn(value)`: Fully Qualified Domain Name.

### Security & ID
- `password(value, options?)`: Defaults to min length 8. Can require special chars.
- `uuid(value)`: RFC4122 v4 UUID.
- `ulid(value)`: Universal Unique Lexicographically Sortable Identifier.
- `cuid(value)`: Collision-resistant IDs.
- `mongodbId(value)`: MongoDB ObjectId format.

### Commerce & Finance
- `creditCard(value)`: Validates using Luhn algorithm.
- `currency(value, codes?)`: ISO currency codes (USD, EUR, etc.).
- `iban(value)`: International Bank Account Number format.

### Utilities
- `json(value)`: Checks if string is valid parsable JSON.
- `semver(value)`: Semantic Versioning (e.g., `1.2.3-beta.1`).
- `port(value)`: Number between 0 and 65535.
- `handle(value)`: Social handles (e.g., `@username`).
- `macAddress(value)`: Standard MAC address format.
- `hexColor(value)`, `rgbColor(value)`, `hslColor(value)`: CSS color formats.

---

## 🛡️ Error Handling

The `assert` API throws a `ValidationError` which extends the native `Error` class and includes a `code` property for programmatic handling.

```typescript
```typescript
import { ValidationError } from 'isx-intent';

// ... inside a catch block
if (error instanceof ValidationError) {
  switch (error.code) {
    case 'INVALID_EMAIL': 
      // handle specific error
  }
}
```

## 📄 License

MIT © [Hiren Tumbadiya](https://github.com/HirenTumbadiya)
