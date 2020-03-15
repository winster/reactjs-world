import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./Components/Home";
import CountryDetails from "./Components/CountryDetails";
import NotFound from "./Components/404";
import Nav from "./Components/Nav";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './Theme';
import {GlobalStyles} from './Global';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (e) => {
    console.log('inside toggleTheme');
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
              <Route exact path="/details" component={CountryDetails}/>
              <Route exact path="/404" component={NotFound}/>
              <Redirect to="/404"/>
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;