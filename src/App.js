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
    const response = await fetch('http://localhost:8888/alexsobron/back/wp-json/wp/v2/media?per_page=100');
    const data = await response.json();
    this.setState({ mediaFromWP: data });
  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/canvas' render={() => (<RandomCanvas media={this.state.mediaFromWP} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
