import React from "react";
// import Header from "./components/Header";
//import "./styles.css";
import Header from "./components/Header/Header";
import Routes from "./routes";
import { Reset } from "./global";
function App() {
  return (
      <div className="App">
        {/* <Header /> */}
        <Reset />
        <Header />
        <Routes />
      </div>
  );
}

export default App;
