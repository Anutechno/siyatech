import './App.css';
import Headerss from './components/header/Headerss';
import Footers from './components/footer/Footer';
import Routss from './routerss/Routss';

function App() {
  return (
    <div className='App'>
      <div>
        <Headerss />
      </div>
      <div>
        <Routss />
      </div>
      <div>
        <Footers />
      </div>
    </div>
  );
}

export default App;
