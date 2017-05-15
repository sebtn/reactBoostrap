let React = require('react')
let ReactDOM = require('react-dom')
import Button from './bootstrap/button.js'
 
class App extends React.Component {
	render(){
		return <div className="jumbotron jumbotron-fluid text-center">
			<div className="conatiner">
				<h1>React User Interfaces</h1>		
				<p>Sassy Bootstraped and all!</p>		
				<p> <Button className="-primary -xl" href="https://v4-alpha.getbootstrap.com/" target="_blank" />		
						<Button className="-danger -xl" disabled/> </p>		
						<Button className="-success -xl -block" /> 
			</div>
		</div>		 
	}
}
export default App
