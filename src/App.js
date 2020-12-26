import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login/Login';
import routes from './routes.js';

function App() {
  return (
    <div className="App">

      <Router>
      {routes}
      </Router>
    </div>
  );
}

export default App;
