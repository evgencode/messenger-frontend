import Paper from '@material-ui/core/Paper'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { LgUpRouter, LgDownRouter } from '@components/common/Routes'
import './index.scss'

const DesktopApp = ({ width }) => {
  return (
    <Router>
      <Paper square className="desktop-app">
        {isWidthUp('lg', width) ? <LgUpRouter /> : <LgDownRouter />}
      </Paper>
    </Router>
  )
}

export default withWidth()(DesktopApp)
