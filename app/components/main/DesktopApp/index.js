import Paper from '@material-ui/core/Paper'
import React, { Fragment } from 'react'
import Groups from '@components/common/Groups'
import Chat from '@components/common/Chat'
import GroupInfo from '@components/common/GroupInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import './index.scss'

const DesktopApp = ({ width }) => {
  const lgUpRouter = (
    <Fragment>
      <Chat />
      <Route exact path="/info/:uuid" component={GroupInfo} />
    </Fragment>
  )

  const lgDownRouter = (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/info/:uuid" component={GroupInfo} />
      </Switch>
    </Fragment>
  )

  return (
    <Router>
      <Paper square className="desktop-app">
        <Groups />
        {isWidthUp('lg', width) ? lgUpRouter : lgDownRouter}
      </Paper>
    </Router>
  )
}

export default withWidth()(DesktopApp)
