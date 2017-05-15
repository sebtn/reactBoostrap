let React = require('react')

class Button extends React.Component {
	//Want to remove the word btn in the html, will modify strings
	//key = 'btn' do this:
	classify(key, value) {
		//if there is a dash at the first place of value
		if(value[0] === '-')
		//make value a sum	
			value = key + value
		//final string cosntruction	
		//look at srtings literals
		return key + ' ' + value.split(' -').join(' ' + key +'-')
	}

	render() {
		// this is one form to reference things in JSx:
		// return <a className={this.props.className} href={this.props.href}
		//  target={this.props.target}>
		// 		DISCOVER REACT!</a>
	
		// this is another form of referencing, extracting all props at once:
		//ternary to chack if Tag has a href prop, 
		//if it does make a link 'a' if not leave it as 'button'
		// const Tag = this.props.href? 'a':'button' 
		// const className = 'btn ' + this.props.className
		// clasName is overrriding this.props
		// return <Tag {...this.props} className={className}>DISCOVER REACT!</Tag> 	
		// 
		//  there is a third wey of doing it:	
		const Tag = this.props.href? 'a':'button' 
		//using th method classify usign btn as key and 
		//this.props.className as value
		//clasName is overrriding this.props by being written to the right
		//adding the disabled capability
		const className = this.classify('btn', this.props.className) + 
					(this.props.disabled? '-disabled':'')
		return <Tag {...this.props} className={className}>DISCOVER!!</Tag>
	}
}
export default Button