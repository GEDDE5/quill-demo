import React from 'react'
import PropTypes from 'prop-types'

const PreviewBody = ({ children }) => (
  <div className='preview__content ql-editor'>
    {children}
  </div>
)

PreviewBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default PreviewBody
