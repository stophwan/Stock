import React from 'react';
import './App.css';
import{ BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CompanyList from './pages/CompanyList';
import CompanyDetail from './pages/CompanyDetail';
import News from './pages/News'
import MainPage from './pages/MainPage'
import Container from '@material-ui/core/Container';
import TopNav from './components/TopNav'




function App() {
  return (
    <Router>
      <TopNav/>
      <Container>
        <div className="App">
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/list">
              <CompanyList/>
            </Route>
            <Route path="/detail">
              <CompanyDetail/>
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
