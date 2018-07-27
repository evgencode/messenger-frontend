import Hidden from '@material-ui/core/Hidden'
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { store } from '@store/index'

import DesktopApp from '@components/main/DesktopApp'
import MobileApp from '@components/main/MobileApp'
import theme from '@components/theme'

const Root = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <Hidden smUp>
            <MobileApp />
          </Hidden>
          <Hidden xsDown>
            <DesktopApp />
          </Hidden>
        </MuiThemeProvider>
      </div>
    </Provider>
  )
}

export default Root
