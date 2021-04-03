import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './style.css';

import Nav from './Nav';
import Main from './Main';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route render={() => (<p>Page not found.</p>)} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
