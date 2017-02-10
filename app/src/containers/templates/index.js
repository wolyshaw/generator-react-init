import React, {Component} from 'react'
import {connect} from 'react-redux'

class reduxComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				reduxComponent
			</div>
		)
	}
}

export default connect()(
	reduxComponent
)
