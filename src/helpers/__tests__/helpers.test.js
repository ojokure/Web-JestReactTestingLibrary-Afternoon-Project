import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('can multiply two positive numbers', () => {
    expect(helpers.multiply(2,3)).toBe(6);
  })

  it('can multiply two negative numbers', () => {
    expect(helpers.multiply(-3,-3)).toBe(9);
  })

  it('can multiply two negative numbers', () => {
    expect(helpers.multiply(-3,-3)).toBe(9);
  })
  it('throws if parsed strings', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
 
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================

  it('objects contianing unmatching pairs', () => {
    const expected = {name: 'peter'};
    expect({name: 'baz'}).toEqual(expect.not.objectContaining(expected));
  })
});