import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import { CopyToClipboard } from 'react-copy-to-clipboard'

class PreviewHeading extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copied: false
    }
  }

  handleOnCopy = () => this.setState({ copied: true })

  render() {
    const {
      children,
      output
    } = this.props

    const {
      copied
    } = this.state

    const copyToClipboardButtonClasses = classnames(
      'preview__heading__copy-to-clipboard-button',
      { 'preview__heading__copy-to-clipboard-button--copied': copied ? true : undefined }
    )
    return (
      <div className='preview__heading'>
        {children}

        <CopyToClipboard
          text={output}
          onCopy={this.handleOnCopy}>
          <span
            className={copyToClipboardButtonClasses}>
            {
              copied
                ? 'Copied'
                : 'Copy to clipboard'
            }
          </span>
        </CopyToClipboard>
      </div>
    )
  }
}

PreviewHeading.propTypes = {
  children: PropTypes.node.isRequired,
  output: PropTypes.string.isRequired
}

export default PreviewHeading
