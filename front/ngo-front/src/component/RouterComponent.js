import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './page/HomeComponent';

class RouterComponent extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/home'>
                        <HomeComponent/>
                    </Route>
                    <Route path='/admin'>
                        <Admin/>
                    </Route>
                    <Route path='/'>
                        <Redirect to={{pathname:'/home'}}/>
                    </Route>
                </Switch>
            </HashRouter>
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