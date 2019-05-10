import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import url from './url';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Fragment>
          {this.displayContent(url)}
          
        </Fragment>
      </BrowserRouter>
    );
  }
  displayContent = (url) => {
    let routes = '';
    routes = url.map((value, index) => {
      return (
        <Route key={index} path={value.path} exact={value.exact} component={value.main} />
      );
    })
    return <Switch>{routes}</Switch>;
  }
}

export default App;
