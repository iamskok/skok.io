/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Component } from 'react'
// import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'
import Highlight, { Prism } from 'prism-react-renderer'
import { Fragment } from 'react'
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
    />
    // <Highlight
    //   Prism={Prism}
    //   code={code}
    //   theme={this.props.theme || liveTheme}
    //   language={this.props.language}
    // >
    //   {({ tokens, getLineProps, getTokenProps }) => (
    //     <Fragment>
    //       {tokens.map((line, i) => (
    //         // eslint-disable-next-line react/jsx-key
    //         <div {...getLineProps({ line, key: i })}>
    //           {line.map((token, key) => (
    //             // eslint-disable-next-line react/jsx-key
    //             <span {...getTokenProps({ token, key })} />
    //           ))}
    //         </div>
    //       ))}
    //     </Fragment>
    //   )}
    // </Highlight>
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
        value={code}
        highlight={this.highlightCode}
        onValueChange={this.updateContent}
        textareaClassName="react-simple-code-editor"
        {...rest}
      />
    );
  }
}

export default CodeEditor;
