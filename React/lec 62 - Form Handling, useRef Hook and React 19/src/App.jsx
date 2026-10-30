import ControlledComponents from "./components/ControlledComponents";
import UnControlledComponents from "./components/UnControlledComponents";
import UnControlledComponentsUseRefs from "./components/UnControlledComponentsUseRefs";

function App() {
  return (
    <div>
      <ControlledComponents />
      <UnControlledComponents />
      <UnControlledComponentsUseRefs />
    </div>
  );
}

export default App;
