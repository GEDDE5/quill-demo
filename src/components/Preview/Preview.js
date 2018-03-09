import React, { Component } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line
class Preview extends Component {
  render() {
    return (
      <div className='preview'>
        {this.props.children}
      </div>
    )
  }
}

Preview.propTypes = {
  children: PropTypes.node.isRequired
}

export default Preview
