/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import { Fragment, useState } from 'react'
import LineNumber from './line-number'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'
import PrismContext from './prism-context'

const HighlightCode = ({
  code,
  language,
  theme: defaultTheme,
  metastring,
  lineNumbers: globalLineNumbers,
  ...props
}) => {
  console.log('defaultTheme', defaultTheme)
  const prismModes = defaultTheme.modes
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  let showLineNumbers

  const [prismTheme, setPrismTheme] = useState(defaultTheme)

  const changePrismTheme = () => {
    console.log('prismModes', prismModes)
    console.log('prismModes.length', Object.keys(prismModes).length)
    const keys = Object.keys(prismModes).sort()
    if (keys.length > 0) {
      let index = -1

      keys.forEach((key, i) => {
        const prismMode = prismModes[key]
        console.log('____prismMode', prismMode)
        if (prismMode === prismTheme) {
          index = i
          console.log('change prism theme index', index)
        }
      })

      if (index === -1) {
        setPrismTheme(prismModes[keys[0]])
      } else if (index === keys.length - 1) {
        setPrismTheme(defaultTheme)
      } else {
        setPrismTheme(prismModes[keys[index + 1]])
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

  console.log('prismTheme', prismTheme)

  return (
    <PrismContext.Consumer>
      {({ name }) => (
        <Fragment>
          <button
            onClick={changePrismTheme}
            style={{
              zIndex: 9999,
              pointerEvents: 'auto',
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            Change theme --- {name}
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
                    {showLineNumbers && <LineNumber index={i} />}
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
        </Fragment>
      )}
    </PrismContext.Consumer>
  )
}

export default HighlightCode