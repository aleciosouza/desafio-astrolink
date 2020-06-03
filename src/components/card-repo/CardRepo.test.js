import React from 'react'
import CardRepo from './CardRepo'
import { render, findByLabelText, queryByTestId, findByTestId } from '@testing-library/react'

const repoCompleto = {
    id: 14993753,
    name: "3D-contributions",
    description: "[UNMAINTAINED] 3D print your github contributions graph",
    stargazers_count: 2,
    language: "JavaScript",
    svn_url: "https://github.com/andrew/3D-contributions",
};

const repoIncompleto = { id: 14993753, name: "3D-contributions" };


describe('CardRepo', () => {
    it('Render CardRepo corretamente com repositório completo', async () => {
        let { container, queryByLabelText, queryByTestId } = render(<CardRepo repo={repoCompleto} />)

        expect((await findByLabelText(container, 'repo-desc')).innerHTML).toBe(repoCompleto.description)
        expect(queryByTestId('repo-url').innerHTML).toBe(`${repoCompleto.name}<i class=\"mat-icon\">open_in_new</i>`);
        expect(queryByTestId('repo-url').href).toBe(repoCompleto.svn_url);
        expect(queryByLabelText('repo-stars')).not.toBeNull();
        expect(queryByLabelText('repo-lang')).not.toBeNull();
    });
    it('Render CardRepo corretamente com repositório incompleto', () => {
        let { queryByLabelText, queryByTestId } = render(<CardRepo repo={repoIncompleto} />)
        expect(queryByTestId('repo-url').innerHTML).toBe(`${repoCompleto.name}<i class=\"mat-icon\">open_in_new</i>`);
        expect(queryByTestId('repo-url').href).toBe('http://localhost/#');
        expect(queryByLabelText('repo-stars').innerHTML).toBe('0')
        expect(queryByLabelText('repo-lang').innerHTML).toBe('Não informado')
    });
})

