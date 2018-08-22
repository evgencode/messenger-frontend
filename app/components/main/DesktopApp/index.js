import Paper from '@material-ui/core/Paper'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import React from 'react'
import { LgUpRouter, LgDownRouter } from '@components/common/Routes'
import './index.scss'

const DesktopApp = ({ width }) => {
  return (
    <Paper square className="desktop-app">
      {isWidthUp('lg', width) ? <LgUpRouter /> : <LgDownRouter />}
    </Paper>
  )
}

export default withWidth()(DesktopApp)
