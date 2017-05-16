//objective: To remove the word btn jumbotron in the HTML, 
//will modify strings. 
//We have key = 'btn', 'jumbotron' or other 
//bootstrap element 
//and value = this.props.className 
//do this:
export function classify(key, value='') {
	//if there is a dash at the first place of value
	if(value[0] === '-') value = key + value
	//make value a sum	
		value = value.split(' -').join(` ${key}-`)
	//final string construction	
	//look at strings literals to refactor the code
	return `${key} ${value}`
}
