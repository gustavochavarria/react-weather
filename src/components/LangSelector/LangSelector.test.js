import reducer, { switchLang } from '../../redux/langSlice';

describe('LangSelector', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value: 'en' });
  });

  test('should switch language', () => {
    const previousState = { value: 'en' };
    expect(reducer(previousState, switchLang())).toEqual({ value: 'es' });
  });
});
