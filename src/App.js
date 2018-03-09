import React, { Component } from 'react'

import Editor from 'components/Editor/Editor'

import Preview from 'components/Preview/Preview'
import PreviewHeading from 'components/Preview/PreviewHeading'
import PreviewBody from 'components/Preview/PreviewBody'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super()

    this.state = {
      html: ''
    }
  }

  updateEditorValue = html => this.setState({ html })

  render() {
    const {
      html
    } = this.state
    return (
      <div className='page'>
        <div className='grid'>
          <p className='page__title'>
            <a
              className='page__link'
              href='https://github.com/zenoamaro/react-quill'
              target='_blank'
              rel='noopener noreferrer'>
                react-quill
            </a>
            demo
          </p>

          <Editor
            placeholder='Type here'
            updateEditorValue={this.updateEditorValue} />

          <Preview>
            <PreviewHeading>
              Output HTML
            </PreviewHeading>
            <PreviewBody>
              {html}
            </PreviewBody>
          </Preview>
        </div>
      </div>
    )
  }
}

export default App
