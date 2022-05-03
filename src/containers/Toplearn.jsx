import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Course from '../common/Course';
import Footer from '../common/Footer';
import Nav from '../common/Nav';
import Login from '../Login/Login';
import Register from '../Login/Register';

const Toplearn = (props) => {
    return ( 
    <React.Fragment>
            <Nav/>    
            <Switch>
                    <Route path = "/login" component={Login} />
                    <Route path = "/register" component={Register} />
                    <Route path = "/" exact component={Course} />
            </Switch>
            <Footer/>
            
    </React.Fragment>
     );
}
 
export default Toplearn;