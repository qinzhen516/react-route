import React, { Component } from 'react';
import './style.css';
import { Route, Switch,NavLink} from 'react-router-dom';


class Document extends Component{
	constructor(){
		super()
		this.state = {
			flage : false
		}
		this.handleclick = this.handleclick.bind(this);
	}
	handleclick(e){
		this.setState({
			flage: !this.state.flage
		})
		// console.log(this.state.flage);
	}
	render(){
	
			let html = this.state.flage ? <List /> : "" ;
		return (
			<div className="box">
				  <span onClick={this.handleclick}>编码规范 ></span>
				  {html}
				
			 	
			</div>
			)
        
	}
}

class List extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<ul className="list" >
					
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