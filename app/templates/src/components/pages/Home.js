import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from 'static/pages/home.less'

export default class Home extends Component {
	constructor(props) {
		super(...props)
	}

	render() {
		return (
			<div className={ styles.controller }>
				this page is home
			</div>
		)
	}
}
