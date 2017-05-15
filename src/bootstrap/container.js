let React = require('react')

export default class Container extends React.Component {
	render() {
		//this props.children helps nodes under
		//container to be displayed
		//className added dynamically in case another class name is used
		const cls = `container${this.props.fluid?'-fluid':''} ${this.props.className  || ''}`
		return <div className={cls} style={this.props.style}>
			{this.props.children}
		</div>
	}
}