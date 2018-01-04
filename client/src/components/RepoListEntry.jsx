import React from 'react';

const RepoListEntry = ({ repo, index }) => (
  <div>
    <span> {index + 1} </span>
    <span><a href={repo.url} target="_blank"> {repo.name} </a></span>
    <span> { ' - ' + repo.stars + 'stars'} </span>
  </div>
);

export default RepoListEntry;