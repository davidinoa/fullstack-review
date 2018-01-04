import React from 'react';

const RepoListEntry = ({ repo, index }) => (
  <tbody>
    <tr>
      <td> {index + 1} </td>
      <td><a href={repo.url} target="_blank"> {repo.name} </a></td>
      <td> {repo.stars} </td>
    </tr>
  </tbody>
);

export default RepoListEntry;