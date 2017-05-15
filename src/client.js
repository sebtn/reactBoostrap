// this file shouyld be as small as possible all the
// components arrive here by means of App
// the file that you mod is the app.js file
// then you import it here

let React = require('react')
let ReactDOM = require('react-dom')
import App from './app.js'


ReactDOM.render(<App />, document.getElementById('react-division'))