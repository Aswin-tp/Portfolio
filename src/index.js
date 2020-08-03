import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes';
import Header from './components/Header';


ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
<Route exact path='/' render={() => <Header><App /></Header>} />
        <Route path='/jokes' render={() =><Header><Jokes /></Header>} />
    </Switch>
</Router>, 
document.getElementById('root')
);

/*
new Promise((resolve, reject) => { 
    return reject (new Error('no Bears'));

    setTimeout( () => {
    resolve('Bears beets and battlestar galactica');
}, 2000);
})
.then( quote=> {
    console.log(quote);
    
})
.catch(error => console.log('error', error));
*/




