import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavBar";
import MainList from "./components/MainList";
import { Provider } from "react-redux";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <AppNavbar />
        <MainList />
      </div>
      </Provider>
      
    );
  }
}

export default App;
