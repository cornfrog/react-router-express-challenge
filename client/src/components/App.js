import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Resume from "./Resume";
import ProjectsIndex from "./ProjectsIndex";
import ProjectShow from "./ProjectShow";

import "../assets/scss/main.scss"

const App = props => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/projects" component={ProjectsIndex} />
          <Route exact path="/projects/:id" component={ProjectShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
