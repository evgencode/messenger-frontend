import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

import './index.scss'

const Index = props => {
  return (
    <div
      className={classNames(['loader', { loader_opaque: props.opaque }])}
      style={props.style}
    >
      <CircularProgress
        className={classNames(['loader-spin'])}
        thickness={4}
        size={props.size}
      />
    </div>
  )
}

Index.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf([32, 64, 128]),
  opaque: PropTypes.bool
}

Index.defaultProps = {
  style: {},
  size: 32,
  opaque: false
}

export default Index
