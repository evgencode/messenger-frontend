import _ from 'lodash'
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Chat from '@components/common/Chat'
import IntroPage from '@components/common/IntroPage'
import Groups from '@components/common/Groups'
import GroupInfo from '@components/common/GroupInfo'

const routes = [
  {
    id: 'IntroPage',
    path: '/',
    component: IntroPage,
    mobile: { active: false },
    lgUp: { active: true, exact: true },
    lgDown: { active: true, exact: true }
  },
  {
    id: 'Groups',
    path: '/',
    component: Groups,
    mobile: { active: true, exact: true },
    lgUp: { active: false },
    lgDown: { active: false }
  },
  {
    id: 'Chat',
    path: '/chat/:uuid',
    component: Chat,
    mobile: { active: true, exact: true },
    lgUp: { active: true },
    lgDown: { active: true, exact: true }
  },
  {
    id: 'GroupInfo',
    path: '/chat/:uuid/info',
    component: GroupInfo,
    mobile: { active: true, exact: true },
    lgUp: { active: true },
    lgDown: { active: true, exact: true }
  }
]

export const routesById = _.reduce(
  routes,
  (routes, { id, ...route }) => ({ ...routes, [id]: route }),
  {}
)

export const MobileAppRouter = () => (
  <Switch>
    {routes
      .filter(route => route.mobile.active)
      .map(({ id, path, component, mobile: { exact } }) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
  </Switch>
)

export const LgUpRouter = () => (
  <Fragment>
    <Groups />
    {routes
      .filter(route => route.lgUp.active)
      .map(({ id, path, component, lgUp: { exact } }) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
  </Fragment>
)

export const LgDownRouter = () => (
  <Fragment>
    <Groups />
    <Switch>
      {routes
        .filter(route => route.lgDown.active)
        .map(({ id, path, component, lgDown: { exact } }) => (
          <Route key={id} exact={exact} path={path} component={component} />
        ))}
    </Switch>
  </Fragment>
)
