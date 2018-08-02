import React, { Component } from 'react';
import './style.css';
import { Route, Switch,NavLink} from 'react-router-dom';

class Document extends Component{
	constructor(){
		super()
		// this.state = {
		// 	display:"block"
		// }
		// this.handleclick = this.handleclick.bind(this);
	}
	// handleclick(e){
	// 	if(this.state.display = "block"){
	// 		this.setState({
	// 			display: "none"
	// 		})
	// 	}else if(this.state.display = "none"){
	// 		this.setState({
	// 				display: "block"
	// 		})
	// 	}
	// }
	render(){
	

		return (
			 <div onClick={this.handleclick}>
			 
				 
				 <ul className="list">
				 	编码规范 >
					<li><NavLink to="/document/sql" activeClassName="likes">SQL规范</NavLink></li>
					<li><NavLink to="/document/java" activeClassName="likes">Java基础开发规范</NavLink></li>
					<li><NavLink to="/document/javabackend" activeClassName="likes">Java后端服务开发规范</NavLink></li>
					<li><NavLink to="/document/rest" activeClassName="likes">Rest api规范</NavLink></li>
					<li><NavLink to="/document/front-end" activeClassName="likes">前端服务开发规范</NavLink></li>
					<li><NavLink to="/document/git" activeClassName="likes">Git提交规范</NavLink></li>
					<li><NavLink to="/document/gitlab" activeClassName="likes">Gitlab CI规范</NavLink></li>
				</ul>
				<div className="right">
				
					<Switch>
						<Route path="/document/sql" render={()=>{return <div>SQL规范</div>}}></Route>
						<Route path="/document/java" render={()=>{return <div>Java基础开发规范</div>}}></Route>
						<Route path="/document/javabackend" render={()=>{return <div>Java后端服务开发规范</div>}}></Route>
						<Route path="/document/rest" render={()=>{return <div>Rest api规范</div>}}></Route>
						<Route path="/document/front-end" render={()=>{return <div>前端服务开发规范</div>}}></Route>
						<Route path="/document/git" render={()=>{return <div>Git提交规范</div>}}></Route>
						<Route path="/document/gitlab" render={()=>{return <div>Gitlab CI规范</div>}}></Route>

					</Switch> 
				</div>
             </div>
			)
        
	}
}


export default Document