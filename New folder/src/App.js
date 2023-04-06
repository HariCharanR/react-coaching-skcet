import './App.css';
import Day1 from './Day1';
import Day10 from './Day10';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';
import Day6 from './Day6';
import Day7 from './Day7';
import Day8 from './Day8';
import Day9 from './Day9';

function App() {
  return (
    <div className="App">
          <h1>DAY 1</h1>
          <Day1/>
          <hr/>
          <h1>DAY 2</h1>
          {/* <Day2/> */}
          <hr/>
          <h1>DAY 3</h1>
          <Day3 />
          <hr/>
          <h1>DAY 4</h1>
          <Day4 />
          <hr/>
          <h1>DAY 5</h1>
          <Day5 />
          <hr/>
          <h1>DAY 6</h1>
          <Day6 />
          <hr/>
          <h1>DAY 7</h1>
          <Day7/>
          <hr/>
          <h1>DAY 8</h1>
          <Day8/>
          <hr/>
          <h1>DAY 9</h1>
          <Day9 />
          <hr/>
          <h1>DAY 10</h1>
          <Day10 />
    </div>
  );
}

export default App;
