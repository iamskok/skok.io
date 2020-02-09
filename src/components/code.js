import React from 'react'
import { defaultProps } from 'prism-react-renderer'
import ReactLive from './react-live'
import PrismHighlight from './prism-highlight'
import calculateLinesToHighlight from '../utils/calculate-lines-to-highlight'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const Code = ({
  children,
  className: outerClassName,
  title,
  metastring,
  ...props
}) => {
  const [language] = outerClassName.replace(/language-/, '').split(' ')
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
        /> :
        <PrismHighlight
          defaultProps={defaultProps}
          props={props}
          outerClassName={outerClassName}
          code={codeString}
          language={lang}
          theme={undefined}
          shouldHighlightLine={shouldHighlightLine}
        />
      }
    </>
  )
}

export default Code