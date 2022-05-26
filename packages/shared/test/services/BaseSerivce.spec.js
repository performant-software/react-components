import axios from 'axios';
import BaseService from '../../src/services/BaseService';

jest.mock('axios');

class TestClass extends BaseService {

}

describe('getAxios', () => {
  it('should return the default axios instance', () => {
    const test = new TestClass();
    const instance = test.getAxios();
    expect(instance).toBe(axios);
  });
});
