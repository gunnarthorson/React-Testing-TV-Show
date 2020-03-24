import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';


describe('App', () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it('displays name from API', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
}); 

