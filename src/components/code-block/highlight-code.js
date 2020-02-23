/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import React, { useState } from 'react'
import LineNumber from './line-number'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'

const HighlightCode = ({
  code,
  language,
  theme: defaultTheme,
  metastring,
  lineNumbers: globalLineNumbers,
  ...props
}) => {
  const prismModes = defaultTheme.modes
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  let showLineNumbers

  const [prismTheme, setPrismTheme] = useState(defaultTheme)

  const changePrismTheme = () => {
    if (prismModes.length > 0) {
      let index = -1
      prismModes.forEach((prismMode, i) => {
        if (prismMode === prismTheme) {
          index = i
          console.log('change prism theme index', index)
        }
      })

      if (index === -1) {
        setPrismTheme(prismModes[0])
      } else if (index === prismModes.length - 1) {
        setPrismTheme(defaultTheme)
      } else {
        setPrismTheme(prismModes[index + 1])
      }
    }
  }

  const meta = metastring &&
    metastring.split(` `).reduce((acc, cur) => {
      if (cur.split(`=`).length > 1) {
        const t = cur.split(`=`)
        acc[t[0]] = t[1]
        return acc
      }
      acc[cur] = true
      return acc
    }, {})

  if (meta) {
    Object.keys(meta).forEach(key => props[key] = meta[key])
    const { lineNumbers } = meta

    if (lineNumbers !== undefined) {
      showLineNumbers = lineNumbers === 'true'
    } else {
      showLineNumbers = globalLineNumbers
    }
  }

  return (
    <>
      <button
        onClick={changePrismTheme}
        style={{
          zIndex: 9999,
          pointerEvents: 'all',
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >
        Change theme
      </button>
      <Highlight
        Prism={Prism}
        code={code}
        theme={prismTheme}
        language={language}
      >
        {({
          tokens,
          getLineProps,
          getTokenProps,
          style,
          className
        }) => (
          <Styled.code
            style={style}
            className={className}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? 'highlight-line' : '',
                })}
              >
                {showLineNumbers && <LineNumber index={i}/>}
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    sx={{ display: 'inline-block' }}
                  />
                ))}
              </div>
            ))}
          </Styled.code>
        )}
      </Highlight>
    </>
  )
}

export default HighlightCode