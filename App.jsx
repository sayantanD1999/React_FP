import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home_FP';
import About from './About_FP';
import Service from './Service_FP';
import Contact from './Contact_FP';
import Navbar from './Navbar_FP';
const App = () => {
    return (
        <>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/"/>
            </Switch>

        </>

    );
};
export default App;