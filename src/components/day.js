import React, { Component } from 'react';
import { Route, Switch,NavLink} from 'react-router-dom';

class Day extends Component{
	constructor(){
		super()
	}
	render(){
	
		return (
			<div>
			
				<ul className="list list2">
					<li><NavLink to="/day/backend" activeClassName="likes">后端</NavLink></li>
					<li><NavLink to="/day/front-end" activeClassName="likes">前端</NavLink></li>
					<li><NavLink to="/day/mobile" activeClassName="likes">移动中心</NavLink></li>
					<li><NavLink to="/day/per" activeClassName="likes">提前批</NavLink></li>
					<li><NavLink to="/day/rongjing" activeClassName="likes">融晶</NavLink></li>
					<li><NavLink to="/day/test" activeClassName="likes">测试中心</NavLink></li>
					
				</ul>
				<div className="right">
				
					<Switch>
						<Route path="/day/backend" render={()=>{return <div>后端</div>}}></Route>
						<Route path="/day/front-end" render={()=>{return <div>前端</div>}}></Route>
						<Route path="/day/mobile" render={()=>{return <div>移动中心</div>}}></Route>
						<Route path="/day/per" render={()=>{return <div>提前批</div>}}></Route>
						<Route path="/day/rongjing" render={()=>{return <div>融晶</div>}}></Route>
						<Route path="/day/test" render={()=>{return <div>测试中心</div>}}></Route>

					</Switch> 
				</div>
				
			</div>
			)
        
	}
}


export default Day