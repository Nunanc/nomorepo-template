import { describe, expect, it } from 'vitest'
import { reduce } from '../src/reduce'
describe('pkg2', () => {
  it('add', () => {
    expect(reduce(1, 2)).toBe(-1)
  })
})
