import React from 'react'
import FloatingButton from './FloatingButton'
import { render, fireEvent } from '@testing-library/react'

describe('Floating Button', () => {
    it('Render FloatingButton corretamente', () => {
        let icon = "icon-test";
        let text = "text-test";
        const { queryByTestId, rerender } = render(<FloatingButton icon={icon} text={text} />)
        expect(queryByTestId('btn-floating')).toBeTruthy();
        expect(queryByTestId('btn-floating-icon').innerHTML).toBe(icon);
        expect(queryByTestId('btn-floating-text').innerHTML).toBe(text);

        icon = "icon-test-2";
        text = "text-test-2";
        rerender(<FloatingButton icon={icon} text={text} />)
        expect(queryByTestId('btn-floating')).toBeTruthy();
        expect(queryByTestId('btn-floating-icon').innerHTML).toBe(icon);
        expect(queryByTestId('btn-floating-text').innerHTML).toBe(text);

    })
    it('executa onClickHandler ao clicar', async () => {
        const mockOnClickHandler = jest.fn();
        const { queryByTestId } = render(<FloatingButton onClickHandler={mockOnClickHandler} />)
        const btnFloating = queryByTestId('btn-floating');
        fireEvent.click(btnFloating);
        expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
    })
});