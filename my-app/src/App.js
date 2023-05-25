import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps'
import StatfulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatfulGreetingWithPrevState name="Sandra"/>
    </div>
  );
}

export default App;
