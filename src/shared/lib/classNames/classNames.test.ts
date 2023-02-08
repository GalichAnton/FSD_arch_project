import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('SomeClass')).toBe('SomeClass')
  })

  test('with addition class', () => {
    const expected = 'SomeClass class1 class2'
    expect(classNames('SomeClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'SomeClass class1 class2 scrollable hidden'
    expect(classNames('SomeClass',
      { scrollable: true, hidden: true },
      ['class1', 'class2']))
      .toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'SomeClass class1 class2 hidden'
    expect(classNames('SomeClass',
      { scrollable: false, hidden: true },
      ['class1', 'class2']))
      .toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'SomeClass class1 class2 hidden'
    expect(classNames('SomeClass',
      { scrollable: undefined, hidden: true },
      ['class1', 'class2']))
      .toBe(expected)
  })
})
