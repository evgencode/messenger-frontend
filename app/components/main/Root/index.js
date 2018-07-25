import Hidden from '@material-ui/core/Hidden'
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { store } from '@store/index'

import DesktopApp from '@components/main/DesktopApp'
import MobileApp from '@components/main/MobileApp'

const Root = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Hidden smUp>
          <MobileApp />
        </Hidden>
        <Hidden xsDown>
          <DesktopApp />
        </Hidden>
      </div>
    </Provider>
  )
}

export default Root
