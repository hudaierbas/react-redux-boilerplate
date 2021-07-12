import "./App.css";
import Example from "./components/Example";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Example />
      </div>
    </Provider>
  );
}

export default App;
