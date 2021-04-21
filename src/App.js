import React from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

class App extends React.Component {
    render() {
        return(

            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                </Switch>
            </Router>

        )
    }
}

export default App;