import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import WorkCalendar from './pages/WorkCalendar';
import WorkDiary from './pages/WorkDiary';
import OffList from './pages/OffList';

function App() {
  return (
    <div className="App">
        <Route path="/notice" component={Notice} />
        <Route path="/noticeDetail" component={NoticeDetail} />
        <Route path="/calendar" component={WorkCalendar} />
        <Route path="/diary" component={WorkDiary} />
        <Route path="/off" component={OffList} />
        <Route path="/" component={Login} exact/>
    </div>
  );
}

export default App;
