import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = value => {
    this.setState({ value })
    this.props.updateEditorValue(value)
  }

  render() {
    const {
      value
    } = this.state

    return (
      <div>
        <ReactQuill
          className='editor'
          value={value}
          onChange={this.handleChange} />
      </div>
    )
  }
}

Editor.propTypes = {
  updateEditorValue: PropTypes.func.isRequired
}

export default Editor
