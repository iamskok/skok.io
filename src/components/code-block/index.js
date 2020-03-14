/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './calculate-lines-to-highlight'
import getLanguage from './get-language'
import ButtonCodeTheme from './button-code-theme'
import aliases from './aliases'
import scope from './scope'
import { PrismThemeConsumer } from './prism-theme-provider'

const CodeBlock = ({
  children,
  className,
  metastring,
  noInline,
  lineNumbers,
  live,
}) => {
  const { codeBlock: { lineNumbers: globalLineNumbers } } = useSiteMetadata()
  const language = aliases[getLanguage(className)] || getLanguage(className)
  const code = children.props.children.trim()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const showLineNumbers = lineNumbers !== undefined ?
    lineNumbers === 'true' :
    globalLineNumbers

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div>
          <div sx={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}>
            <ButtonCodeTheme />
          </div>
          <Styled.pre sx={{ marginTop: 0 }}>
            {
              live ?
              <ReactLiveEditor
                code={code}
                theme={prismTheme}
                scope={scope}
                language={language}
                noInline={noInline}
                metastring={metastring}
                lineNumbers={showLineNumbers}
                shouldHighlightLine={shouldHighlightLine}
              /> :
              <HighlightCode
                code={code}
                language={language}
                theme={prismTheme}
                metastring={metastring}
                lineNumbers={showLineNumbers}
                shouldHighlightLine={shouldHighlightLine}
              />
            }
          </Styled.pre>
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default CodeBlock