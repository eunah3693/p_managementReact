import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import WorkCalendar from './pages/WorkCalendar';
import WorkDiary from './pages/WorkDiary';
import OffList from './pages/OffList';
import OffDetail from './pages/OffDetail';
import PayList from './pages/PayList';
import { ThemeProvider,createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#555",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Route path="/notice" component={Notice} />
          <Route path="/noticeDetail" component={NoticeDetail} />
          <Route path="/calendar" component={WorkCalendar} />
          <Route path="/diary" component={WorkDiary} />
          <Route path="/off" component={OffList} />
          <Route path="/offDetail" component={OffDetail} />
          <Route path="/pay" component={PayList} />
          <Route path="/" component={Login} exact/>
      </div>
    </ThemeProvider>
  );
}

export default App;
