import "./App.css";
import CategoryBodyParts from "./components/CategoryBodyParts/CategoryBodyParts";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
function App() {
  return (
    <div className="App">
      <Hero />
      <CategoryBodyParts />
      <Reasons />
    </div>
  );
}

export default App;
