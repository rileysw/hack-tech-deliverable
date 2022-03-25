import "./App.css";

// Components
import Form from "./components/Form";
import Petr from "./components/Petr";

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <Form />
      </div>
      <div className="petr-container">
        <Petr />
      </div>
    </div>
  );
}

export default App;
