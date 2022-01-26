import { Switch } from "react-router"
import { Dashboard } from "../pages/dashboard";

import { LogIn } from "../pages/logIn"
import { SignUp } from "../pages/signUp";
import { useAuth } from "../provider/AuthProvider";
import { Route } from "./Route";

export const Routes = () => {

    const { accessToken } = useAuth();

    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    )
};