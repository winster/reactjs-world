import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./Components/Home";
import CountryDetails from "./Components/CountryDetails";
import NotFound from "./Components/404";
import Nav from "./Components/Nav";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './Theme/Theme';
import {GlobalStyles} from './Theme/Global';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (e) => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Router>
          <div className="App">
            <Nav onToggleTheme={toggleTheme} theme={theme}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:id([a-zA-Z0-9]{3})" component={CountryDetails}/>
              <Route exact path="/NotFound" component={NotFound}/>
              <Redirect to="/NotFound"/>
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;