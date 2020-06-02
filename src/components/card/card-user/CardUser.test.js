import React from 'react'
import CardUser from './CardUser'
import { render, findByLabelText, queryByTestId } from '@testing-library/react'

const userCompleto = {
    id: 1060,
    login: "andrew",
    avatar_url: "https://avatars2.githubusercontent.com/u/1060?v=4",
    email: 'andrew@email.com',
    bio: "Software engineer and researcher",
    followers: 2325,
    following: 3145,
};

const userIncompleto = { id: 1060, login: "andrew" };


describe('CardUser', () => {
    it('Render Carduser corretamente com usuário completo', async () => {
        let { container, queryByLabelText, queryByTestId } = render(<CardUser user={userCompleto} />)
        expect((await findByLabelText(container, 'user-email')).innerHTML).toBe(userCompleto.email)
        expect(queryByTestId('user-img').src).toBe(userCompleto.avatar_url);
        expect(queryByLabelText('user-bio')).not.toBeNull();
        expect(queryByLabelText('user-followers').innerHTML).toBe(userCompleto.followers.toString());
        expect(queryByLabelText('user-following').innerHTML).toBe(userCompleto.following.toString());
    });
    it('Render Carduser corretamente com usuário incompleto', async () => {
        let { queryByLabelText, queryByTestId } = render(<CardUser user={userIncompleto} />)
        expect(queryByLabelText('user-email')).toBeFalsy();
        expect(queryByTestId('user-img')).toBeFalsy();
        expect(queryByLabelText('user-bio')).toBeFalsy();
        expect(queryByLabelText('user-followers').innerHTML).toBe('0');
        expect(queryByLabelText('user-following').innerHTML).toBe('0');
    });
})

