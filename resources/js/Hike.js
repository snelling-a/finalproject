import React, { createContext, useEffect, useState, useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import EntitySubmit from "./pages/entities/EntitySubmit";
import EntityDetails from "./pages/entities/EntityDetails";
import Home from "./pages/home/Home";
import MapPage from "./pages/map/MapPage";
import Favorites from "./pages/favorites/Favorites";
import { Container } from "react-bootstrap";

export const UserContext = createContext(null);
export const GoogleContext = createContext(null);
export const WeatherContext = createContext(null);

const Hike = (props) => {
    console.log("file: Hike.js  line 23  Hike  props", props);

    const googleKey = props.config.REACT_APP_GOOGLE_API_KEY;
    const weatherKey = props.config.REACT_OPEN_WEATHER_API_KEY;

    const [user, setUser] = useState(null);

    const loadCurrentUser = async () => {
        // console.log("Loading current user information");
        const response = await fetch("/api/user", {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        setUser(data);
    };
    useEffect(() => {
        loadCurrentUser();
    }, []);

    return (
        <Router>
            <UserContext.Provider value={user}>
                <GoogleContext.Provider value={googleKey}>
                    <TopNav />

                    <Container className="mt-3 pt-5">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/map" component={MapPage} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/register" component={Register} />
                            <Route path="/submit" component={EntitySubmit} />

                            <Route path="/favs" component={Favorites} />
                            <WeatherContext.Provider value={weatherKey}>
                                <Route
                                    path="/details/:id"
                                    component={EntityDetails}
                                />
                            </WeatherContext.Provider>
                        </Switch>
                    </Container>
                </GoogleContext.Provider>
            </UserContext.Provider>
        </Router>
    );
};

export default Hike;
