import React from 'react';

//router components
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//components
import Home from '../pages/home/home';
import Consulting from '../pages/consulting/consulting';
import Distribution from '../pages/distribution/distribution';
import ConsultingProduct from '../pages/consulting/consultingProduct/consultingProduct';
import CaseStudies from '../pages/caseStudies/caseStudies';
import Tech from '../pages/technology/tech';
import Technology from '../pages/technology/technology';
import TechnologyP from '../pages/technology/technologyProduct';

const Path = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/consulting' component={Consulting} />
        <Route exact path='/distribution' component={Distribution} />
        <Route exact path='/consultp' component={ConsultingProduct} />
        <Route exact path='/case-studies' component={CaseStudies} />
        <Route exact path='/tech' component={Tech} />
        <Route exact path='/techp' component={TechnologyP} />
        <Route exact path='/technology' component={Technology} />
        {/* <Route exact path='/techp' component={Distribution} />
        <Route exact path='/distp' component={Distribution} /> */}
      </div>
    </Router>
  );
};

export default Path;
