import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { AppButton } from './AppButton';

describe('AppButton', () => {
  test('test render', async () => {
    render(<AppButton>Test</AppButton>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
