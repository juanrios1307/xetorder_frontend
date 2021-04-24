import React from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterP1 from "./pages/Register/RegisterP1";
import RegisterP2 from "./pages/Register/RegisterP2";
import RegisterP3 from "./pages/Register/RegistroP3";

class App extends React.Component {
    render() {
        return(

            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/selectplan" component={RegisterP1}/>
                    <Route exact path="/register2" component={RegisterP2}/>
                    <Route exact path="/register3" component={RegisterP3}/>
                </Switch>
            </Router>

        )
    }
}

export default App;