# epsicheck

Five simple utilities for comparing two floating point numbers, each with a short alias:

- `equal` or `eq`,
- `lessThan` or `lt`,
- `lessThanOrEqual` or `lte`,
- `greaterThan` or `gt`, and
- `greaterThanOrEqual` or `gte`.

The default epsilon is `1e-6` and can be customized using the third parameter.

## Functions Overview

| **`a, b`**    | **`eq(a, b)`**     | **`lt(a, b)`**     | **`lte(a, b)`**    | **`gt(a, b)`**     | **`gte(a, b)`**    |
|---------------|:------------------:|:------------------:|:------------------:|:------------------:|:------------------:|
| `1, 2`        |                    | :white_check_mark: | :white_check_mark: |                    |                    |
| `1, 1 + 1e-5` |                    | :white_check_mark: | :white_check_mark: |                    |                    |
| `1, 1 + 1e-7` | :white_check_mark: |                    | :white_check_mark: |                    | :white_check_mark: |
| `1, 1`        | :white_check_mark: |                    | :white_check_mark: |                    | :white_check_mark: |
| `1 + 1e-7, 1` | :white_check_mark: |                    | :white_check_mark: |                    | :white_check_mark: |
| `1 + 1e-5, 1` |                    |                    |                    | :white_check_mark: | :white_check_mark: |
| `2, 1`        |                    |                    |                    | :white_check_mark: | :white_check_mark: |

The above table is assuming the default epsilon of `1e-6`.

## Installation & Usage

```shell
$ npm i epsicheck
```

```ts
import { eq } from 'epsicheck'

console.assert(eq(0.1 + 0.2, 0.3))
console.assert(0.1 + 0.2 != 0.3)
```
