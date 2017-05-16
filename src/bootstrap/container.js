let React = require('react')

export default class Container extends React.Component {
	render() {
		//this props.children helps nodes under
		//container to be displayed
		//className added dynamically in case another class is used
		//if it's not there then pass an empty string
		const cls = `container${this.props.fluid?'-fluid':''} ${this.props.className  || ''}`
		//If no style is provided it wont parse it
		return <div className={cls} style={this.props.style}>
			{this.props.children}
		</div>
	}
}