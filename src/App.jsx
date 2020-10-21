import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/GamePage";
import store from "./redux/store";

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/game" component={GamePage} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;
