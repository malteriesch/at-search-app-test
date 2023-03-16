import {describe, expect, it} from 'vitest';
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event'


const setup = () => {
  const utils = render(<App/>)
  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button')
  return {
    input,
    button,
    screen,
    ...utils,
  }
}


describe('App', () => {
  it('Starts with an empty state', () => {
    const {input, button, screen} = setup()

    expect(screen.getByText('Product Search')).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(button).toBeEnabled();
    expect(screen.queryByText('No Results')).toBeInTheDocument();
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });


  it('changes the text field when typing', async () => {
    const user = userEvent.setup()
    const {input, button, screen} = setup()

    await user.type(input, "Disney")
    expect(input).toHaveValue('Disney');
  });


  it('When searching the search button is disabled and correct messages are shown', async () => {

    const {button, screen} = setup()

    fireEvent.click(button)

    await waitFor(async () => {
      expect(screen.queryByText('Loading...')).toBeInTheDocument()
      expect(screen.queryByText('No Results')).not.toBeInTheDocument()
      await expect(button).toBeDisabled();
    }, {
      timeout: 5000,
    });

  });

  it('It displays the search results when found', async () => {
    const {input, button, screen} = setup()

    await act(async () => {
      const user = userEvent.setup()
      await user.type(input, "Disney")
      await button.click()
    });

    expect(screen.queryByText('No Results')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();

    expect(screen.queryByText('Disneyland')).toBeInTheDocument();
    expect(screen.queryByText('Florida')).toBeInTheDocument();
    expect(screen.queryByAltText('Disneyland')).toBeInTheDocument();

    expect(screen.queryByText('Paris Disney')).toBeInTheDocument();
    expect(screen.queryByText('France')).toBeInTheDocument();
    expect(screen.queryByAltText('Paris Disney')).toBeInTheDocument();

  });

  it('It displays message if no results found', async () => {

    const {input, button, screen} = setup()
    await act(async () => {
      const user = userEvent.setup()
      await user.type(input, "icannotbefound")
      await button.click()
    });

    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
    expect(screen.queryByText('Disneyland')).not.toBeInTheDocument();
    expect(screen.queryByText('Florida')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Disneyland')).not.toBeInTheDocument();

  });
});
