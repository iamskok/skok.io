/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'
import languages from './languages'
import languageIcons from './language-icons'

const LanguageTab = ({ language }) => {
  const LanguageIcon = languageIcons[language]
  const humanReadableLanguage = languages[language]

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div sx={{
          color: prismTheme.plain.color,
          backgroundColor: prismTheme.plain.backgroundColor,
          transition: 'color 400ms ease, background 400ms ease',
          display: 'flex',
          position: 'absolute',
          left: 0
        }}>
          {
            LanguageIcon &&
            <LanguageIcon
              sx={{
                padding: 1,
                width: 40,
                height: 40,
              }}
              alt={humanReadableLanguage || language}
            />
          }
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default LanguageTab