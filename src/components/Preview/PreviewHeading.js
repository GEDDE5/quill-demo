import React from 'react'
import PropTypes from 'prop-types'

const PreviewHeading = ({ children }) => (
  <div className='preview__heading'>
    <div style={{ height: '24px', padding: '4px 8px' }}>{children}</div>
  </div>
)

PreviewHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default PreviewHeading
