import Mask from '../../src/js/classes/mask.js'

describe("BitMask", () => {
  let mask;
  let actual;
  let expected;

  beforeEach(() => {
    mask = new Mask(10);
  });

  test('it creates a bitmask of specific length', () => {
    expected = 10;
    actual = mask.getBits().length;
    expect(actual).toEqual(expected);
  });

  test('it sets a bit at particular position', () => {
    mask.setBit(5);
    expected = 1;
    actual = mask.getBits()[5]
    expect(actual).toEqual(expected);
  });

  test('it unsets all bits', () => {
    mask.unsetAll();
    expected = 0;
    actual = mask.getBits().filter(bit => bit === 1).length;
    expect(actual).toEqual(expected);
  });

  test('it returns setIndex', () => {
    mask.setBit(6);
    expected = 6;
    actual = mask.getSetBitIndex();
    expect(actual).toEqual(expected);
  });
});