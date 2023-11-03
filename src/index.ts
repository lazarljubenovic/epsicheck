export const DEFAULT_EPSILON = 1e-6

export function equal (
  a: number,
  b: number,
  ε: number = DEFAULT_EPSILON,
): boolean {
  return Math.abs(a - b) < ε
}

export function lessThan (
  a: number,
  b: number,
  ε: number = DEFAULT_EPSILON,
): boolean {
  return b - a > ε
}

export function greaterThan (
  a: number,
  b: number,
  ε: number = DEFAULT_EPSILON,
): boolean {
  return a - b > ε
}

export function lessThanOrEqual (
  a: number,
  b: number,
  ε: number = DEFAULT_EPSILON,
): boolean {
  return a - b < ε
}

export function greaterThanOrEqual (
  a: number,
  b: number,
  ε: number = DEFAULT_EPSILON,
): boolean {
  return b - a < ε
}

export const eq = equal
export const lt = lessThan
export const gt = greaterThan
export const lte = lessThanOrEqual
export const gte = greaterThanOrEqual
