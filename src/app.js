let React = require('react')
let ReactDOM = require('react-dom')
import Button from './bootstrap/button.js'
import Jumbotron	from './bootstrap/jumbotron.js'
 
export default class App extends React.Component {
	render(){
		return <Jumbotron className="-fluid text-center">
				<h1>React User Interfaces</h1>		
				<p>Sassy Bootstraped and all!</p>		
				<p> <Button className="-primary -xl" href="https://v4-alpha.getbootstrap.com/" target="_blank" />		
						<Button className="-danger -xl" disabled/> </p>		
						<Button className="-success -xl -block" /> 
		</Jumbotron>		 
	}
}
 
