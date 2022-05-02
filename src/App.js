import './App.css';
import { Header } from './components/navigation/header.component'
import { Routes, Route, Navigate } from "react-router-dom";
import AvailableElections from'./pages/availableElections/availableElections.component'
import CreateElection from './pages/createElection/createElection.component';
import Results from './pages/results/results.component';
import CastVote from './pages/castVote/castVote.component';

function App() {

  return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/available-elections" />} />
          <Route path="/available-elections" element={<AvailableElections />} />
          <Route path="/create-election" element={<CreateElection />} />
          <Route path="/results" element={<Results />} />
          <Route path="/cast-vote" element={<CastVote />} />
          
        </Routes>
      </div>
    
  );
}

export default App;
