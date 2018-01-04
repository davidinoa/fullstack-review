import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:1128/repos')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          repos: result
        });
      }, error => {
        this.setState({
          isLoaded: 'Error while loading',
        });
        console.log(error);
      });
  }

  search (term) {
    console.log(`${term} was searched`);

    $.post('http://localhost:1128/repos', {term: term}, function(data) {
      console.log(data);
      alert('success');
    });
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos}/>
        <Search onSearch={this.search.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));