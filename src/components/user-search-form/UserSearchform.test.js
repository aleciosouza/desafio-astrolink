import React from 'react'
import ReactDom from 'react-dom'
import UserSearchForm from './UserSearchForm'
import { render, fireEvent, findByTestId } from '@testing-library/react'

it('Render UserSearchForm corretamente', () => {
  const { queryByTestId } = render(<UserSearchForm />)

  expect(queryByTestId('user-search-input')).toBeTruthy();
  expect(queryByTestId('user-search-bt')).toBeTruthy();
  expect(queryByTestId('search-error')).toBeFalsy();
});

describe('Input username', () => {
  it('Atualiza com alteracao', () => {
    const { queryByTestId } = render(<UserSearchForm />)
    const username = '-teste'
    const userSeachInput = queryByTestId('user-search-input');
    fireEvent.change(userSeachInput, { target: { value: username } });
    expect(userSeachInput.value).toBe(username);
  })
  describe('Com valor inválido', () => {
    it('Mostra erro', async () => {
      const mockOnUserChanged = jest.fn();
      const { queryByTestId, container } = render(<UserSearchForm onUserChanged={mockOnUserChanged} />)
      const userSeachInput = queryByTestId('user-search-input');
      const userSeachBt = queryByTestId('user-search-bt');
      fireEvent.change(userSeachInput, { target: { value: '-teste' } });
      fireEvent.click(userSeachBt);
      expect(await findByTestId(container, 'search-error')).toBeTruthy();
      expect(mockOnUserChanged).toHaveBeenCalledTimes(0);
    })
    it('Não chama onUserChanged', async () => {
      const mockOnUserChanged = jest.fn();
      const { queryByTestId } = render(<UserSearchForm onUserChanged={mockOnUserChanged} />)
      const userSeachInput = queryByTestId('user-search-input');
      const userSeachBt = queryByTestId('user-search-bt');
      fireEvent.change(userSeachInput, { target: { value: '-teste' } });
      fireEvent.click(userSeachBt);
      expect(mockOnUserChanged).toHaveBeenCalledTimes(0);
    })
  })
  describe('Com valor válido', () => {
    it('Não mostra erro', async () => {
      const mockOnUserChanged = jest.fn();
      const { queryByTestId } = render(<UserSearchForm onUserChanged={mockOnUserChanged} />)
      const userSeachInput = queryByTestId('user-search-input');
      const userSeachBt = queryByTestId('user-search-bt');
      fireEvent.change(userSeachInput, { target: { value: 'teste' } });
      fireEvent.click(userSeachBt);
      expect(queryByTestId('search-error')).toBeNull();
    })
    it('Chama onUserChanged', async () => {
      const mockOnUserChanged = jest.fn();
      const { queryByTestId } = render(<UserSearchForm onUserChanged={mockOnUserChanged} />)
      const userSeachInput = queryByTestId('user-search-input');
      const userSeachBt = queryByTestId('user-search-bt');
      fireEvent.change(userSeachInput, { target: { value: 'teste' } });
      fireEvent.click(userSeachBt);
      expect(mockOnUserChanged).toHaveBeenCalledTimes(1);
    })
  });
})
