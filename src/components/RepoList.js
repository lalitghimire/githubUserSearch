import React from 'react';

//compont to display the list of github repositories
const RepoList = ({ repo }) => {
    return (
        <div className='liststyle'>
            <ul>
                {repo.length !== 0 ? (
                    repo.map((repo) => (
                        <li key={repo.id}>
                            {repo.name}{' '}
                            <a href={`${repo.svn_url}`} rel=' noreferrer' target='_blank'>
                                {' '}
                                link{' '}
                            </a>
                        </li>
                    ))
                ) : (
                    <p> No repositories available</p>
                )}
            </ul>
        </div>
    );
};

export default RepoList;
