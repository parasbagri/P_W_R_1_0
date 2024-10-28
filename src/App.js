import "./App.css";
import PahlaComp from "./PahlaComp";
import ImageShow from "./ImageShow";
import ConditionalRendring from "./ConditionalRendring";

function App() {
  return (
    <div className="App">
      <PahlaComp />
      <ImageShow />
      {/* <ImageShow/> */}
      <ConditionalRendring/>
    </div>
  );
}

export default App;
