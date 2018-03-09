import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PreviewHeading from './PreviewHeading'
import PreviewBody from './PreviewBody'

// eslint-disable-next-line
class Preview extends Component {
  render() {
    const {
      heading,
      output
    } = this.props
    return (
      <div className='preview'>
        <PreviewHeading output={output}>
          {heading}
        </PreviewHeading>
        <PreviewBody>
          {output}
        </PreviewBody>
      </div>
    )
  }
}

Preview.propTypes = {
  heading: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired
}

export default Preview
