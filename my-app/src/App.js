import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps'
import StatfulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';


function App() {
  return (
    <div className="App">
      <ConditionalRenderingFunctional connected={false} />
      <ConditionalRenderingClass />
    </div>
  );
}

export default App;
