import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Page1 from './page/page1';



class App extends React.Component{
	render(){
		return(
			<div>	
				{this.props.children}
			</div>				
		)
	}
}
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Page1}/>
		</Route>
	</Router>
	),document.getElementById("content")
);

