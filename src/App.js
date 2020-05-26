import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import CanvasPage from './pages/canvas/canvaspage.component';

import './App.scss';

const App = () => {
  const [mediaFromWP, setMediaFromWP] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataArr = [];
      const hits = await axios('http://localhost:8888/alexsobron/back/wp-json/wp/v2/media?per_page=100');
      for (let i = 1; i <= hits.headers['x-wp-totalpages']; i++) {
        const response = await axios(`http://localhost:8888/alexsobron/back/wp-json/wp/v2/media?per_page=100&page=${i}`);
        response.data.map(item => dataArr.push(item));
      }
      setMediaFromWP(dataArr);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/canvas' render={() => (<CanvasPage mediaFromWP={mediaFromWP} />)} />
      </Switch>
    </div>
  );
}

export default App;