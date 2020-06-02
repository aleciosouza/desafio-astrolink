import React from 'react'
import App from './App.js'
import { render } from '@testing-library/react';

describe('App', () => {
    it('Render App.js corretamente', async () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('user-search-input')).toBeTruthy();
        expect(getByTestId('user-search-bt')).toBeTruthy();
    });
});
