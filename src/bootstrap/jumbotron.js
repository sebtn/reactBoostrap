let React = require('react')
import Container from './container.js'
import {classify} from './utils.js'
import './jumbotron.scss'

export default class Jumbotron extends React.Component {

	render() {
		const CSS_name = 'jumbotron'
		const props = Object.assign({}, this.props)
					props.className = classify(CSS_name, props.className)
		const containerFluid = props.containerFluid
		//avoid the error by deleting the props
		delete props.containerFluid
		// does the class name includes fluid in it? 
		// if it does use the container body using JSX if it does not
		// just pass the children of the object
		const body = props.className.includes(CSS_name + '-fluid')?
		<Container fluid={containerFluid}>{this.props.children}
		</Container>:this.props.children

		//{this.props.children} is necessary to fetch everything under 
		//jumbotron tag which is located inside app.js
		return <div {...props} >
			{body}
		</div>
	}
}