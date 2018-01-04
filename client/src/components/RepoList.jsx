import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({ repos }) => (
  <div>
    <h4> Top {repos.length} Repos </h4>
    {repos.map((repo, index) => {
      return <RepoListEntry key={repo.id} repo={repo} index={index}/>;
    })}
  </div>
);

export default RepoList;