require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import InboxContainer from './components/Inbox/inbox_container';
import SpamContainer from './components/Spam/spam_container';
import SpamIndEmail from './components/Spam/spam_ind_email';
import InboxIndEmail from './components/Inbox/inbox_ind_email';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={InboxContainer} />
            <Route path="/spam" component={SpamContainer} />
            <Route path="/:emailID" component={InboxIndEmail} />
            <Route path="/spam/:emailID" component={SpamIndEmail} />
        </Route>
    </Router>
);

ReactDOM.render(
  routes, document.getElementById('root')
);
