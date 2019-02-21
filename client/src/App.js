import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/App.css"
import home from "./pages/home";
import yourList from "./pages/yourList";
import gamePage from "./pages/gamePage";
import constructionPage from "./pages/constructionPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/yourList" component={yourList} />
        <Route exact path="/game" component={gamePage} />
        <Route exact path="/construction" component={constructionPage}/>
      </Switch>
    </Router>
  );
}

export default App;

