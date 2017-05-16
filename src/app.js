let React = require('react')
let ReactDOM = require('react-dom')
import Button from './bootstrap/button.js'
import Jumbotron	from './bootstrap/jumbotron.js'
// import scss from './appsrc.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import  './appsrc.scss'
 
export default class App extends React.Component {
	constructor(props) {
		//The super goes to the parent leverage the extends
		//and fetch props in this case
		super(props)
		this.onClick = this.onClick.bind(this)
		this.onReset = this.onReset.bind(this)
		//this.state is an object hash click and number value 
		//and labels array
		this.state = {click:0, labels:[]}
	}

	onReset(event) {
		// reset the state, say click is back to zero and 
		// labels as empty array
		this.setState({click:0 + 1, labels:[]})
	}	

	onClick(event) {
		let labels = this.state.labels.concat([this.state.click])
		//fetches the object, possible because bind on the super
		//binds both this, the one rendered and the parent one
		this.setState({click:this.state.click + 1, labels:labels})
		console.log(labels)

	}

 	render(){ 
 		let buttons = this.state.labels.map((value, index) => {
 			//react wants a key when we create dynamic elements in 
 			//rendering, key is not global is just for this 
 			//render session, used value to not have problems if 
 			//the click is removed form the counter
 			return <Button key={value}>{value}</Button>
 		})

		return <ReactCSSTransitionGroup transitionName="app" transitionAppear={true}
		transitionAppearTimeout={1500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
		<Jumbotron className="-fluid addedClass" containerFluid={true}>
				<h1>React User Interfaces</h1>		
				<p>Sassy Bootstraped and all!</p>		
				<p> <Button onClick={this.onReset} className="-secondary -xl" label="Reset" />		
				    <Button className="-primary -xl" href="https://v4-alpha.getbootstrap.com/" target="_blank" label="Discover Bootstrap" />		
						<Button className="-danger -xl" disabled label="See me?" /> </p>		
						<Button onClick={this.onClick}className="-success -xl -block">{this.state.click}</Button>
				<ReactCSSTransitionGroup transitionName="app" transitionAppearTimeout={1500} 
				transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
						{buttons}
				</ReactCSSTransitionGroup>		
		</Jumbotron></ReactCSSTransitionGroup>	 
	}
}
 
