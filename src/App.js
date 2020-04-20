import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RandomCanvas from './components/random-canvas/random-canvas.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mediaFromWP: []
    }
  }

  async componentDidMount() {
    const requests = [];
    const response = await fetch('http://localhost:8888/alexsobron/back/wp-json/wp/v2/media?per_page=100');
    for (let i = 1; i <= response.headers.get('X-WP-TotalPages'); i++) {
      requests.push(this.fetchData(`http://localhost:8888/alexsobron/back/wp-json/wp/v2/media?per_page=100&page=${i}`))
    }
    Promise.all(requests)
      .then(data => {
        this.setState({ mediaFromWP: data });
      })
  }

  fetchData = (url) => {
    return fetch(url)
      .then(response => response.json());
  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/canvas' render={() => (<RandomCanvas mediaFromWP={this.state.mediaFromWP} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
