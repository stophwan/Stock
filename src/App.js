import React from 'react';
import './App.css';
import{ BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CompanyDetail from './pages/CompanyDetail';
import MainPage from './pages/MainPage'
import News from './pages/News'
import Container from '@material-ui/core/Container';
import TopNav from './components/TopNav'


function App() {

  return (
    <Router>
      <TopNav/>
      <Container>
        <div className="App">
          <Switch>
            <Route path="/company/:ticker">
              <CompanyDetail />
            </Route>
            <Route path="/news/:ticker">
              <News />
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
