/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'
import languages from './languages'
import languageIcons from './language-icons'

const LanguageTab = ({ language }) => {
  const icon = languageIcons[language]
  const humanReadableLanguage = languages[language]

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div sx={{
          color: prismTheme.plain.color,
          backgroundColor: prismTheme.plain.backgroundColor,
          fontSize: 2,
          lineHeight: 1.5,
          fontFamily: 'monospace',
          margin: '-20 0 0 0',
          transition: 'color 400ms ease, background 400ms ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {
            icon ?
            <img
              src={icon}
              alt={`${humanReadableLanguage} || ${language}`}
              sx={{
                padding: 1,
                width: 40,
                height: 40,
              }}
            /> :
            humanReadableLanguage ? humanReadableLanguage :
            language
          }
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default LanguageTab