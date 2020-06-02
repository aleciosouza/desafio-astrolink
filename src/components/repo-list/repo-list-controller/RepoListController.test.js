import React from 'react'
import RepoListController from './RepoListController'
import { render, findByTestId, fireEvent } from '@testing-library/react'

const repos = [
    {
        id: 14993753,
        name: "3D-contributions",
        description: "[UNMAINTAINED] 3D print your github contributions graph",
        stargazers_count: 2,
        language: "JavaScript",
        svn_url: "https://github.com/andrew/3D-contributions",
    },
    {
        id: 114767955,
        name: "a2-in-memory-web-api",
        description: "An in-memory web api for demos and tests",
        stargazers_count: 1,
        language: "JavaScript",
        svn_url: "https://github.com/andrew/a2-in-memory-web-api",
    },
]

const filter = { order: 'asc', icon: 'arrow_upward', text: 'Mais estrelas' }

describe('RepoListController', () => {
    describe('Quando não recebe repositórios', () => {
        it('Não exibe botão de reordenação e exibe mensagem de aviso', async () => {
            const { queryByTestId, container } = render(<RepoListController repos={null} filter={filter} />)
            expect(await findByTestId(container, 'no-repo')).toBeTruthy();
            expect(queryByTestId('btn-floating')).toBeNull();
        })
    })
    describe('Quando recebe repositórios', () => {
        it('Exibe botão de reordenação e não exibe mensagem de aviso', async () => {
            const { queryByTestId, container } = render(<RepoListController repos={repos} filter={filter} />)
            expect(await findByTestId(container, 'btn-floating')).toBeTruthy();
            expect(queryByTestId('no-repo')).toBeNull();
        })
        it('Chama função de reordenação ao clicar no botão', async () => {
            const changeOrdenation = jest.fn();
            const { container } = render(<RepoListController repos={repos} filter={filter} changeOrdenationHandler={changeOrdenation} />)
            fireEvent.click(await findByTestId(container, 'btn-floating'));
            expect(changeOrdenation).toHaveBeenCalledTimes(1);
        })
    })
});