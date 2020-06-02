import React from 'react'
import RepoList from './RepoList'
import { render } from '@testing-library/react'

it('Render Repolist corretamente', () => {
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

    let { queryAllByTestId } = render(<RepoList repos={repos} />)
    expect(queryAllByTestId('card-repo').length).toBe(2);
});