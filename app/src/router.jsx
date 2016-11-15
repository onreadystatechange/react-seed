import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Init from './main';
import Login from './pages/login';
import Home from './pages/home';
import Chart from './pages/chart';
import NotFoundPage from './pages/nofind';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={browserHistory} >        
        <Route path="/login" component = {Login} />
        <Route path="/" component={Init} >
            <IndexRoute component={Home}/>
            <Route path="chart" component={Chart}/>
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />                    
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)