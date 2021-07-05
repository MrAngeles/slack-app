import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Message from "./components/Message/Message";
import Chat from "./components/Chat/Chat";
import Login from './components/Login/Login'

const App = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <div className='app'>
              <Header />
              <Sidebar />
              <Message />
              <Chat />
            </div>
          </Route>
          <Route exact path="/login">
            <div className='login'>
              <Login />
            </div>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
