import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };
  }

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos() {
    console.log('Line 20 running');
    fetch('http://localhost:1128/repos')
      .then(res => res.json())
      .then(result => {
        this.setState({ repos: result });
      });
  }

  search (term) {
    $.post('http://localhost:1128/repos', { term: term })
      .done(() => {
        this.fetchRepos();
      });
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));