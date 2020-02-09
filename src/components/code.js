/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react' // eslint-disable-line no-unused-vars
import { defaultProps } from 'prism-react-renderer'
import PrismHighlight from './prism-highlight'
import ReactLive from './react-live'
import calculateLinesToHighlight from '../utils/calculate-lines-to-highlight'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const Code = ({
  children,
  className,
  title,
  metastring,
  ...props
}) => {
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const isReactLive = props['react-live'] ? true : false
  const codeString = children.props.children.trim()

  return (
    <>
      {
        isReactLive ?
        <ReactLive
          code={codeString}
          noInline={false}
          theme={undefined}
        /> :
        <PrismHighlight
          code={codeString}
          language={lang}
          outerClassName={className}
          theme={undefined}
          shouldHighlightLine={shouldHighlightLine}
          defaultProps={defaultProps}
          props={props}
        />
      }
    </>
  )
}

export default Code