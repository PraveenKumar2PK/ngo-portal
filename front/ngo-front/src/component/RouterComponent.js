import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './page/HomeComponent';
import Registartion from './utils/registration/Registration';

class RouterComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home'>
                        <HomeComponent/>
                    </Route>
                    <Route path='/admin'>
                        <Admin/>
                    </Route>
                    <Route path='/registration'>
                        <Registartion/>
                    </Route>
                    <Route path='/'>
                        <Redirect to={{pathname:'/home'}}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

function Admin() {
return (
    <div>
        
    </div>
    );
}

export default RouterComponent;