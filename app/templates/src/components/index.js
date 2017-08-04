import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Bundle from 'components/common/Bundle'
import styles from 'static/index.less'

const HomeLazy = require('bundle-loader?lazy&name=Home!components/pages/Home')

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const NotFind = props => {
  return (
    <div>
      当前页面未找到
    </div>
  )
}

const Applications = props => {
  return (
    <Router>
			<div className={ styles.controller }>
				<Switch>
					<Route path={ '/' } exact component={ Home }/>
					<Route component={ NotFind }/>
				</Switch>
			</div>
    </Router>
  )
}

export default Applications
