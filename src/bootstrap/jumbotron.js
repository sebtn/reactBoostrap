let React = require('react')
import Container from './container.js'
import {classify} from './utils.js'

export default class Jumbotron extends React.Component {

	render() {
		//{this.props.children} is necessary to fetch everything under 
		//jumbotron tag which is located inside app.js
		return <div {...this.props} className={classify('jumbotron', this.props.className)}>
			<Container className="">
				{this.props.children} 
			</Container>
		</div>
	}
}