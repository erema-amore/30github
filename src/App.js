
import './App.css';
import HomePage from './components/HomePage';
import Calc from './components/calc'
import User from './components/User';
import Month from './components/month'

function App() {
  return (
    <div className="App">
      {/* <HomePage/>
      <User/> */}
      <Calc/>
      <Month/>
      
    </div>
  );
}

export default App;
