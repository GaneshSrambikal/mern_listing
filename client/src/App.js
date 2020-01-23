import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Container} from "reactstrap";
import AppNavbar from "./components/AppNavBar";
import MainList from "./components/MainList";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <MainList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
