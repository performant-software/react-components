import ObjectUtils from '../../src/utils/Object';

describe('isEqual', () => {
  test('should be equal for two null objects', () => {
    expect(ObjectUtils.isEqual(null, null)).toBeTruthy();
  });

  test('should be equal for two strings of the same value', () => {
    expect(ObjectUtils.isEqual('abc', 'abc')).toBeTruthy();
  });

  test('should be equal for the same object', () => {
    const obj1 = {
      id: 1,
      name: 'Test',
      children: [{
        id: 1
      }, {
        id: 2
      }]
    };

    const obj2 = {
      id: 1,
      name: 'Test',
      children: [{
        id: 1
      }, {
        id: 2
      }]
    };

    expect(ObjectUtils.isEqual(obj1, obj2)).toBeTruthy();
  });

  test('should be equal for the same function', () => {
    const func1 = () => 'test';
    const func2 = () => 'test';

    expect(ObjectUtils.isEqual(func1, func2)).toBeTruthy();
  });

  test('should be equal for objects with different keys with null values', () => {
    const a = {
      name: 'Test 123',
      address: null
    };

    const b = {
      name: 'Test 123'
    };

    expect(ObjectUtils.isEqual(a, b, { removeEmptyValues: true })).toBeTruthy();
  });

  test('should be unequal for objects with different keys with null values with removeEmptyValues "false"', () => {
    const a = {
      name: 'Test 123',
      address: null
    };

    const b = {
      name: 'Test 123'
    };

    expect(ObjectUtils.isEqual(a, b)).toBeFalsy();
  });
});
