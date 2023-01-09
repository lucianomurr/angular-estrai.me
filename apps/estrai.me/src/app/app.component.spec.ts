import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  test('should render the app component', async () => {
    await render(AppComponent, {});
    expect(screen.getByText('')).toBeDefined();
  });
});
