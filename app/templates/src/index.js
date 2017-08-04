import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Applications from 'components'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import store from '../reducers'

const middleware = [ thunk ]

export const appStore = createStore(
  store,
  applyMiddleware(...middleware)
)

render(
  <Provider store={ appStore }>
    <Applications/>
  </Provider>,
  document.getElementById('app')
)
