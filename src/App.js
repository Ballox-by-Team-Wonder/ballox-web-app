import './App.css';
import { Header } from './components/navigation/header.component'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AvailableElections from'./pages/availableElections/availableElections.component'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/available-elections" />
          </Route>
          <Route exact path="/available-elections" component={AvailableElections} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
