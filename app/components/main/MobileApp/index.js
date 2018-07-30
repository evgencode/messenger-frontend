import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Groups from '@components/common/Groups'
import Chat from '@components/common/Chat'
import GroupInfo from '@components/common/GroupInfo'

import './index.scss'

const MobileApp = () => {
  return (
    <Router>
      <div className="mobile-app">
        <Switch>
          <Route path="/" exact component={Groups} />
          <Route path="/chat/:uuid" exact component={Chat} />
          <Route path="/info/:uuid" exact component={GroupInfo} />
        </Switch>
      </div>
    </Router>
  )
}

export default MobileApp
