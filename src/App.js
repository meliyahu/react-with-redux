import React from "react";
import "./App.css";
import AppEngine from "./AppEngine";

//
import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <AppEngine />
//     </div>
//   );
// }
function App() {
  return (
    <Router>
      <AppEngine />
    </Router>
  );
}

export default App;
