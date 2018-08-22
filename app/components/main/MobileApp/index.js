import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MobileAppRouter } from '@components/common/Routes'

import './index.scss'

const MobileApp = () => {
  return (
    <div className="mobile-app">
      <MobileAppRouter />
    </div>
  )
}

export default MobileApp
