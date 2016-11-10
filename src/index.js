import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import routes from './routes';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false})

ReactDOM.render(

    <Router history={appHistory}>
        {routes}
    </Router>,

    document.getElementById('app')

);

module.hot.accept();