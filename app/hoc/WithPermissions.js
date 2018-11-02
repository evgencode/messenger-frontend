import React from 'react'
import { getDisplayName } from '@helpers/container_helpers'

// from the server
// to refactor later
export const allPermissionTypesForUserRole = [1, 2, 11, 4, 8, 5]

export const checkAllowed = (componentPermissions, allPermissions) => {
  return componentPermissions.reduce((prev, cur) => {
    return prev && allPermissions.includes(cur)
  }, true)
}

const WithPermitions = permissions => {
  return WrappedComponent => {
    WrappedComponent.displayName = `WithPermitions(${getDisplayName(WrappedComponent)})`
    const allowed = checkAllowed(permissions, allPermissionTypesForUserRole)
    return props => {
      return allowed ? <WrappedComponent permissions={permissions} {...props} /> : <div>Not Allowed</div>
    }
  }
}

export default WithPermitions
