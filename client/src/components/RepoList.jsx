import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';
import Table from 'react-bootstrap/lib/Table';
import Grid from 'react-bootstrap/lib/Grid';

const RepoList = ({ repos }) => (
  <Grid>
    <div>
      <h4> Top {repos.length} Repos </h4>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Stars</th>
          </tr>
        </thead>
        {repos.map((repo, index) => {
          return <RepoListEntry key={repo.id} repo={repo} index={index}/>;
        })}
      </Table>
    </div>
  </Grid>
);

export default RepoList;