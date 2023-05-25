import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps'
import StatfulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatfulGreeting greeting="I'm a stateful class component" name="Sandra"/>
    </div>
  );
}

export default App;
