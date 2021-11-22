import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeAdd from './pages/NoticeAdd';

function App() {
  return (
    <Switch className="App">
        <Route path="/notice" component={Notice} />
        <Route path="/noticeAdd" component={NoticeAdd} />
        <Route path="/" component={Login} exact/>
    </Switch>
  );
}

export default App;
