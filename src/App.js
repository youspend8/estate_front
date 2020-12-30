import React from 'react';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import PageFrame from './components/common/PageFrame';
import Main from './pages/main';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

const App = props => {
  const { location } = props;
  return (
    // <TransitionGroup>
    //   <CSSTransition
    //     key={location.key}
    //     timeout={{ enter: 1000, exit: 1000 }}
    //     classNames="fade"
    //   >
    //   </CSSTransition>
    // </TransitionGroup>
    
    <Switch location={location}>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default withRouter(App);
