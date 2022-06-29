import { fireEvent, render } from '@testing-library/react';

import CitiesAvailable from './CitiesAvailable';

import { CityModel } from '../../../models/CityModel';

describe('<CitiesAvailable />', () => {
  test('CitiesAvailable is rendered', () => {
    const mockHandler = jest.fn();

    const component = render(
      <CitiesAvailable
        cityModel={CityModel}
        currentCity="Managua"
        handleChangeCity={mockHandler}
      />
    );

    const button = component.getByText(CityModel[1].name);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
