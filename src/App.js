import './App.css';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <h5>Omega</h5>
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
