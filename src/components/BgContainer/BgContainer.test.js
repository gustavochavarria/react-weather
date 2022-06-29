import reducer from '../../redux/citySlice';

describe('BgContainer', () => {
  test('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value: 'Managua' });
  });
});
