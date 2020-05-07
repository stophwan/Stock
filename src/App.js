import React from 'react';
import './App.css';
import{ BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CompanyList from './pages/CompanyList'
import News from './pages/News'
import MainPage from './pages/MainPage'
import TopNav from './components/TopNav'




function App() {
  return (
    <div>
    <TopNav />
    <Router>
      <div className="App">
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/list">
            <CompanyList/>
          </Route>
          <Route path="/help">
            <MainPage/>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
