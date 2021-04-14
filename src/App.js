import React from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return(

            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={LoginPage}/>
                </Switch>
            </Router>

        )
    }
}

export default App;