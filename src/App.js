import React from "react";
// import Header from "./components/Header";
import "./styles.css";
import { Header as SHeader} from './components/Header/Header';
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <SHeader>JSHunt</SHeader>
      <Routes />
    </div>
  );
}

export default App;
