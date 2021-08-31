import "./App.css";
import Navigation from "./components/UI/Navbar";
import Home from "./components/HomePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
