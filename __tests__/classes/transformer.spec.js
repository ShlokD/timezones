import Transformer from '../../src/js/classes/transformer';

describe("Transformer", () => {
  let actual;
  let expected;
  let transformer;

  const mockData = { 
    0: ["apples", "arrows"],
    1: ["bears", "battles", "battlestar galactica"],
    2: ["curry", "churros", "cheerios"],
    3: ["deer"],
    4: [""]
  };

  beforeEach(() => {
    transformer = new Transformer(mockData);
  });

  test('it sets data', () => {
    expected = mockData;
    actual = transformer.getData();
    expect(actual).toEqual(expected);  
  });

  describe("transformation policy", () => {
    test('it calculates -1 position', () => {
      expected = 0;
      actual = transformer.applyTransformationPolicy(-1);
      expect(actual).toEqual(expected);
    });

    test('it calculates -0.5 position', () => {
      expected = 1;
      actual = transformer.applyTransformationPolicy(-0.5);
      expect(actual).toEqual(expected);
    });

    test('it calculates 0  position', () => {
      expected = 2;
      actual = transformer.applyTransformationPolicy(0);
      expect(actual).toEqual(expected);
    });

    test('it calculates 0.5 position', () => {
      expected = 3;
      actual = transformer.applyTransformationPolicy(0.5);
      expect(actual).toEqual(expected);
    });

    test('it calculates 1 position', () => {
      expected = 4;
      actual = transformer.applyTransformationPolicy(1);
      expect(actual).toEqual(expected);
    });
  });

  test('it sets a bit and returns data', () => {
    expected = mockData[3];
    transformer.setPosition(0.5);
    actual = transformer.getSetData();
    expect(actual).toEqual(expected);
  });

});