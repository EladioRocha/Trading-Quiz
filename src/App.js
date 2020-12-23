import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import Quizes from "./components/Quizes/Quizes"
import Quiz from "./components/Quiz/Quiz"
import QuizGame from "./components/QuizGame/QuizGame"
import QuizResult from "./components/QuizResult/QuizResult"
import Leaderboard from "./components/Leaderboard/Leaderboard"
import EarnCoins from "./components/EarnCoins/EarnCoins"
import Settings from "./components/Settings/Settings"
import Notifications from "./components/Notifications/Notifications"
import Signup from "./components/Signup/Signup"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Quizes">
          <Quizes />
        </Route>
        <Route path="/Quiz">
          <Quiz />
        </Route>
        <Route path="/QuizGame">
          <QuizGame />
        </Route>
        <Route path="/QuizResult">
          <QuizResult />
        </Route>
        <Route path="/Leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/EarnCoins">
          <EarnCoins />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
        <Route path="/Notifications">
          <Notifications />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
