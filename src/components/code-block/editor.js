/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Component } from 'react'
// import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'

class CodeEditor extends Component {
  // static propTypes = {
  //   code: PropTypes.string,
  //   disabled: PropTypes.boolean,
  //   language: PropTypes.string,
  //   onChange: PropTypes.func,
  //   style: PropTypes.object,
  //   theme: PropTypes.object
  // };

  static getDerivedStateFromProps(props, state) {
    if (props.code !== state.prevCodeProp) {
      return { code: props.code, prevCodeProp: props.code }
    }

    return null
  }

  state = {
    code: ''
  }

  updateContent = code => {
    this.setState({ code }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.code);
      }
    })
  }

  highlightCode = code => (
    <HighlightCode
      code={code}
      theme={this.props.theme || {}}
      language={this.props.language}
      // shouldHighlightLine={}
    />
  )
  
  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      style,
      code: _code,
      onChange,
      language,
      theme,
      ...rest
    } = this.props;
    const { code } = this.state;

    return (
      <Editor
        // sx={{ '& > .npm__react-simple-code-editor__textarea': { zIndex: 1 } }}
        value={code}
        highlight={this.highlightCode}
        onValueChange={this.updateContent}
        {...rest}
      />
    );
  }
}

export default CodeEditor;
