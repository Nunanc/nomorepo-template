import { describe, expect, it } from 'vitest'
import { add } from '../src/add'
describe('pkg1', () => {
  it('add', () => {
    expect(add(1, 2)).toBe(3)
  })
})
