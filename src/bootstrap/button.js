let React = require('react')
//classify is a method inside utils.js
//use {classify} to use only classify and no other method
import {classify} from './utils'
import './button.scss'

export default class Button extends React.Component {

	render() {
		// this is one form to reference things in JSx:
		// return <a className={this.props.className} href={this.props.href}
		//  target={this.props.target}>
		// 		DISCOVER REACT!</a>
	
		// this is another form of referencing, extracting all props at once:
		//ternary to check if Tag has a href prop, 
		//if it does make a link 'a' if not leave it as 'button'
		// const Tag = this.props.href? 'a':'button' 
		// const className = 'btn ' + this.props.className
		// clasName is overriding this.props
		// return <Tag {...this.props} className={className}>DISCOVER REACT!</Tag> 	
		// 
		//  there is a third way of doing it:	
		const Tag = this.props.href? 'a':'button' 
		//using th method classify using btn as key and 
		//this.props.className as value
		//clasName is overriding this.props by being written to the right
		//adding the disabled capability
		const className = classify('btn', this.props.className) + 
					(this.props.disabled? ' disabled':'')
		return <Tag {...this.props} className={className}>{this.props.label || this.props.children}</Tag>
	}
}
