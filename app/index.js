import React from 'react'
import { render } from 'react-dom'
import { store } from '@store'
import './index.css'

console.log(store.getState())

const App = props => <div className="app">Messenger App</div>

render(<App />, document.getElementById('root'))
