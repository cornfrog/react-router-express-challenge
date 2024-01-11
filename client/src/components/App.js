import React, { useState,useEffect } from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Resume from "./Resume";
import ProjectsIndex from "./ProjectsIndex";
import ProjectShow from "./ProjectShow";

import "../assets/scss/main.scss"

const App = props => {
  const [test, setTest] = useState([])
  return (
    <div>
      <BrowserRouter>
      <NavBar test={test} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/projects" render={() => { return <ProjectsIndex setTest={setTest}/>}} />
          <Route exact path="/projects/:id" component={ProjectShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
