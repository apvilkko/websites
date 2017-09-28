import React, { Component } from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import Navi from './Navi';
import PAGES from './pages';
import data from './data';
import prefix from './prefix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <header className="App-header">
              <h1 className="App-title">venntaur.info</h1>
              <Navi />
            </header>
            {PAGES.map(page => [
              page.url === 'info' ?
              <Route key="root" exact path={prefix('')} render={() => <Redirect to={prefix('info')} />} />: null,
              <Route key={page.url} exact path={prefix(page.url)}
                render={() => <page.component data={data[page.url]} />} />
            ])}
            <footer>A.P. Vilkko 2017</footer>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
