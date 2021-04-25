import { Switch, Route } from "react-router-dom";

import './App.css';

import Mainpage from './page/mainPage/mainPage.component'
import WorkPage from './page/workPage/workPage.component'
import HomePage from './page/homepage/homepage.component'

function App() {
  return (
    <div>
      <Mainpage >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/workPage' component={WorkPage} />

        </Switch>



      </Mainpage>

    </div>
  );
}

export default App;
