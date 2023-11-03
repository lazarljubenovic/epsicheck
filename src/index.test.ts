import { describe, expect, test } from '@jest/globals'
import { equal, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual } from './index.js'

describe(`equal`, () => {

  test(`1 ≠ 2`, () => {
    expect(equal(1, 2)).toBe(false)
  })

  test(`1 ≠ 1 + 1e-5`, () => {
    expect(equal(1, 1 + 1e-5)).toBe(false)
  })

  test(`1 = 1 + 1e-7`, () => {
    expect(equal(1, 1 + 1e-7)).toBe(true)
  })

  test(`1 = 1`, () => {
    expect(equal(1, 1)).toBe(true)
  })

  test(`1 + 1e-7 = 1`, () => {
    expect(equal(1 + 1e-7, 1)).toBe(true)
  })

  test(`1 + 1e-5 ≠ 1`, () => {
    expect(equal(1 + 1e-5, 1)).toBe(false)
  })

  test(`2 ≠ 1`, () => {
    expect(equal(2, 1)).toBe(false)
  })

})

describe(`lessThan`, () => {

  test(`1 < 2`, () => {
    expect(lessThan(1, 2)).toBe(true)
  })

  test(`1 < 1 + 1e-5`, () => {
    expect(lessThan(1, 1 + 1e-5)).toBe(true)
  })

  test(`1 ≮ 1 + 1e-7`, () => {
    expect(lessThan(1, 1 + 1e-7)).toBe(false)
  })

  test(`1 ≮ 1`, () => {
    expect(lessThan(1, 1)).toBe(false)
  })

  test(`1 + 1e-7 ≮ 1`, () => {
    expect(lessThan(1 + 1e-7, 1)).toBe(false)
  })

  test(`1 + 1e-5 ≮ 1`, () => {
    expect(lessThan(1 + 1e-5, 1)).toBe(false)
  })

  test(`2 ≮ 1`, () => {
    expect(lessThan(2, 1)).toBe(false)
  })

})

describe(`lessThanOrEqual`, () => {

  test(`1 ≤ 2`, () => {
    expect(lessThanOrEqual(1, 2)).toBe(true)
  })

  test(`1 ≤ 1 + 1e-5`, () => {
    expect(lessThanOrEqual(1, 1 + 1e-5)).toBe(true)
  })

  test(`1 ≤ 1 + 1e-7`, () => {
    expect(lessThanOrEqual(1, 1 + 1e-7)).toBe(true)
  })

  test(`1 ≤ 1`, () => {
    expect(lessThanOrEqual(1, 1)).toBe(true)
  })

  test(`1 + 1e-7 ≤ 1`, () => {
    expect(lessThanOrEqual(1 + 1e-7, 1)).toBe(true)
  })

  test(`1 + 1e-5 ≰ 1`, () => {
    expect(lessThanOrEqual(1 + 1e-5, 1)).toBe(false)
  })

  test(`2 ≰ 1`, () => {
    expect(lessThanOrEqual(2, 1)).toBe(false)
  })

})

describe(`greaterThan`, () => {

  test(`1 ≯ 2`, () => {
    expect(greaterThan(1, 2)).toBe(false)
  })

  test(`1 ≯ 1 + 1e-5`, () => {
    expect(greaterThan(1, 1 + 1e-5)).toBe(false)
  })

  test(`1 ≯ 1 + 1e-7`, () => {
    expect(greaterThan(1, 1 + 1e-7)).toBe(false)
  })

  test(`1 ≯ 1`, () => {
    expect(greaterThan(1, 1)).toBe(false)
  })

  test(`1 + 1e-7 ≯ 1`, () => {
    expect(greaterThan(1 + 1e-7, 1)).toBe(false)
  })

  test(`1 + 1e-5 > 1`, () => {
    expect(greaterThan(1 + 1e-5, 1)).toBe(true)
  })

  test(`2 > 1`, () => {
    expect(greaterThan(2, 1)).toBe(true)
  })

})

describe(`greaterThanOrEqual`, () => {

  test(`1 ≱ 2`, () => {
    expect(greaterThanOrEqual(1, 2)).toBe(false)
  })

  test(`1 ≱ 1 + 1e-5`, () => {
    expect(greaterThanOrEqual(1, 1 + 1e-5)).toBe(false)
  })

  test(`1 ≥ 1 + 1e-7`, () => {
    expect(greaterThanOrEqual(1, 1 + 1e-7)).toBe(true)
  })

  test(`1 ≥ 1`, () => {
    expect(greaterThanOrEqual(1, 1)).toBe(true)
  })

  test(`1 + 1e-7 ≥ 1`, () => {
    expect(greaterThanOrEqual(1 + 1e-7, 1)).toBe(true)
  })

  test(`1 + 1e-5 ≥ 1`, () => {
    expect(greaterThanOrEqual(1 + 1e-5, 1)).toBe(true)
  })

  test(`2 ≥ 1`, () => {
    expect(greaterThanOrEqual(2, 1)).toBe(true)
  })

})
