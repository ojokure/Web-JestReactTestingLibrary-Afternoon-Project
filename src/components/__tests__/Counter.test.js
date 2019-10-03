import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Counter from '../Counter';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Counter user='Peter' countLimit='5'/>);
});

describe('Counter component', () => {
  it('can debug the output', () => {
    tools.debug();
  });

  it('shows the correct user', () => {
    const elementWithJoshText = tools.queryByText(/peter/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it('initial count is zero', () => {
    const elementWithZero = tools.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();
  });

  it('can increment the count by one by clicking increment', () => {
    const incButton = tools.queryByTestId('incButton');

    rtl.fireEvent.click(incButton);
    expect(tools.queryByText(/0/)).not.toBeInTheDocument();
    expect(tools.queryByText(/1/)).toBeInTheDocument();

    rtl.fireEvent.click(incButton);
    expect(tools.queryByText(/1/)).not.toBeInTheDocument();
    expect(tools.queryByText(/2/)).toBeInTheDocument();
  });

  it('can decrement the count by one by clicking decrement', () => {
    // implement
    const counterDecrease = tools.queryByTestId('decButton');
    expect(counterDecrease).toBeInTheDocument();
  });

  it('can reset the count clicking rest', () => {
    // implement
    const counterReset = tools.queryByTestId('resetButton');
    expect(counterReset).toBeInTheDocument()
  });

  it('prevents the count from going over an upper limit', () => {
      // implement
      const incButton = tools.queryByTestId('incButton');
  
      rtl.fireEvent.click(incButton);
      rtl.fireEvent.click(incButton);
      rtl.fireEvent.click(incButton);
      rtl.fireEvent.click(incButton);
      rtl.fireEvent.click(incButton);
      rtl.fireEvent.click(incButton);
    const counterUpperLimit = tools.queryByText(/5/i);
    expect(counterUpperLimit).toBeInTheDocument()
  });

  it('prevents the count from going under a lower limit', () => {
    // implement
  });

  it('shows a warning once we hit the upper limit of the counter', () => {
    // implement
  });

  it('shows a warning once we hit the lower limit of the counter', () => {
    // implement
  });
});
