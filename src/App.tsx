import RouterConfig from "./config/RouterConfig";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
};

export default App;
