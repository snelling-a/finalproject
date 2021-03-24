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
import SearchResults from "./pages/search/SearchResults";
// import { SearchContext } from "./components/TopNav";

export const UserContext = createContext(null);
export const GoogleContext = createContext(null);

const Hike = (props) => {
    const key = props.config;
    // console.log(props.config);

    const [user, setUser] = useState(null);
    const [search, setSearch] = useState("");

    console.log(search);
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
                <GoogleContext.Provider value={key}>
                    {/* <SearchContext.Provider search={search}> */}
                    <TopNav search={search} />
                    <Switch>
                        <main className="mt-3 pt-5">
                            <Route exact path="/" component={Home} />
                            <Route path="/map" component={MapPage} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/register" component={Register} />
                            <Route path="/submit" component={EntitySubmit} />
                            <Route
                                path="/search"
                                component={() => (
                                    <SearchResults search={search} />
                                )}
                            />
                            <Route path="/favs" component={Favorites} />
                            <Route
                                path="/details/:id"
                                component={EntityDetails}
                            />
                        </main>
                    </Switch>
                    {/* </SearchContext.Provider> */}
                </GoogleContext.Provider>
            </UserContext.Provider>
        </Router>
    );
};

export default Hike;
