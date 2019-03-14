import getLevel from '../src/js/app';
import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel', () => {
  fetchData.mockReturnValue({});

  getLevel(152658);

  expect(fetchData).toBeCalledWith('https://server/user/152658');
});
