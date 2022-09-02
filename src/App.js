import './App.css';
import { Roots } from './routerss/Roots';
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Roots />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
