import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Quizzes from './components/Quizzes/Quizzes'
import Quiz from './components/Quiz/Quiz'
import QuizGame from './components/QuizGame/QuizGame'
import QuizResult from './components/QuizResult/QuizResult'
import Leaderboard from './components/Leaderboard/Leaderboard'
import EarnCoins from './components/EarnCoins/EarnCoins'
import Settings from './components/Settings/Settings'
import Notifications from './components/Notifications/Notifications'
import Signup from './components/Signup/Signup'
import Lessons from './components/Lessons/Lessons'
import LessonLecture from './components/LessonLecture/LessonLecture'
import Home from './components/Home/Home'
import ProtectedRoute from './ProtectedRoute'
import Logged from './Logged'


import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Logged exact path="/" component={Login} />
        <Logged path="/Signup" component={Signup} />
        <ProtectedRoute path="/Home" component={Home} />
        <ProtectedRoute path="/Quizzes/:type" component={Quizzes} />
        <ProtectedRoute path="/Quiz" component={Quiz} />
        <ProtectedRoute path="/QuizGame/:quizId" component={QuizGame} />
        <ProtectedRoute path="/QuizResult/:message" component={QuizResult} />
        <ProtectedRoute path="/Leaderboard" component={Leaderboard} />
        <ProtectedRoute path="/EarnCoins" component={EarnCoins} />
        <ProtectedRoute path="/Settings" component={Settings} />
        <ProtectedRoute path="/Notifications" component={Notifications} />
        <ProtectedRoute path="/Lessons/:type" component={Lessons} />
        <ProtectedRoute path="/LessonLecture/:lessonId" component={LessonLecture} />
        <Route path="*">
          <h1>Resource not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
