import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MobileAppRouter } from '@components/common/Routes'

import './index.scss'

const MobileApp = () => {
  return (
    <Router>
      <div className="mobile-app">
        <MobileAppRouter />
      </div>
    </Router>
  )
}

export default MobileApp
