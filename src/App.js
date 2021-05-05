import React from "react";
import { HashRouter, Route } from "react-router-dom";   // import router

import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

import "./App.css";

function App() {
  // return <div>App</div>;

  return(
    // <BrowserRouter></BrowserRouter>
    <HashRouter>
      <Navigation />
      {/* exact가 없으면 /about 과 / 겹쳐 보이게 됨 */}
      {/* <Route path="/" component={Home}></Route> */}
      
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;