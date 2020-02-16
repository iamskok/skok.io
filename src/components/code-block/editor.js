/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Component } from 'react'
// import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'
// import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'
import { theme as liveTheme } from './vendors/react-live/constants/theme'

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
    console.log('code', code)
    this.setState({ code }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.code);
      }
    })
  }

  highlightCode = code => (
    <HighlightCode
      code={code}
      theme={this.props.theme || liveTheme}
      language={this.props.language}
      // shouldHighlightLine={}
      {...this.props}
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
    console.log('2. editor code', code)

    // const baseTheme =
    //   theme && typeof theme.plain === 'object' ? theme.plain : {};

    return (
      <Editor
        value={code}
        highlight={this.highlightCode}
        onValueChange={this.updateContent}
        // sx={{
        //   whiteSpace: 'pre',
        //   fontFamily: 'monospace',
        //   ...baseTheme,
        //   ...style,
        //   fontSize: 3,
        // }}
        {...rest}
      />
    );
  }
}

export default CodeEditor;
