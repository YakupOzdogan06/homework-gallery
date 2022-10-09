import "./App.css";
import data from "./helper/data";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      {data.map((item, index) => (
        <Person key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
