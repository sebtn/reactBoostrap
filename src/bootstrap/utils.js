//objective: To remove the word btn jumbotron in the html, 
//will modify strings. 
//We have key = 'btn', 'jumbotron' or other bootstrap element 
//and value = this.props.className 
//do this:
export function classify(key, value) {
	//if there is a dash at the first place of value
	if(value[0] === '-')
	//make value a sum	
		value = key + value
	//final string cosntruction	
	//look at srtings literals
	return key + ' ' + value.split(' -').join(' ' + key +'-')
}
