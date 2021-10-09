import React from 'react'

//compont to display the list of github repositories
const RepoList = ({ repo }) => {
    const allRepos = null
        ? repo.length === 0
        : repo.map((repo) => (
              <ul key={repo.id}>
                  <li>
                      {repo.name}
                      <a
                          href={`${repo.svn_url}`}
                          rel=' noreferrer'
                          target='_blank'
                      >
                          {' '}
                          link{' '}
                      </a>
                  </li>
              </ul>
          ))

    return <div className='liststyle'> {allRepos}</div>
}

export default RepoList
