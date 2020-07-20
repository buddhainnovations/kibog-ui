import React from 'react';

//router components
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//components
import Home from '../pages/home/home';
import Consulting from '../pages/consulting/consulting';

const Path = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/consulting' component={Consulting} />
      </div>
    </Router>
  );
};

export default Path;
