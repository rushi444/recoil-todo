import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';
import { RecoilRoot } from 'recoil';

it('App renders with TodoList', () => {
  const { getByText } = render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
  );

  getByText(/Recoil Todo List/)
});
