import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import UsersGists from './UsersGists';

const routes = (
    <Route path="/" component={ App }>
        <Route path="user/:username" component={ UsersGists }/>
        <Route path="test" component={ UsersGists }/>

    </Route>
);

export default routes;