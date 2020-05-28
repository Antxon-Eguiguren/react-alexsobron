import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import HeaderComponent from './components/header/header.component';
import MenuComponent from './components/menu/menu.component';

import HomePageComponent from './pages/home/homepage.component';
import ProjectsPageComponent from './pages/projects/projectspage.component';
import JewelleryPageComponent from './pages/jewellery/jewellerypage.component';
import PhotoPageComponent from './pages/photo/photopage.component';
import StylingPageComponent from './pages/styling/stylingpage.component';
import DjPageComponent from './pages/dj/djpage.component';
import AboutPageComponent from './pages/about/aboutpage.component';
import ShopPageComponent from './pages/shop/shoppage.component';
import CanvasPageComponent from './pages/canvas/canvaspage.component';

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

  const headerHidden = useSelector(state => state.headerHidden);

  return (
    <div className='App'>
      <HeaderComponent />
      <MenuComponent headerHidden={headerHidden} />
      <Switch>
        <Route exact path='/'> <HomePageComponent headerHidden={headerHidden} /></Route>
        <Route path='/projects'> <ProjectsPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/jewellery'> <JewelleryPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/photo'> <PhotoPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/styling'> <StylingPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/dj'> <DjPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/about'> <AboutPageComponent headerHidden={headerHidden} /></Route>
        <Route path='/shop'> <ShopPageComponent headerHidden={headerHidden} /></Route>
        {/* <Route path='/canvas'><CanvasPageComponent mediaFromWP={mediaFromWP} /></Route> */}
        <Route path='/*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;