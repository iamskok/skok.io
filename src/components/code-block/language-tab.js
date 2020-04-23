/** @jsx jsx */
import { jsx } from 'theme-ui'
import languages from './languages'
import languageIcons from './language-icons'

const LanguageTab = ({ language }) => {
  const LanguageIcon = languageIcons[language]
  const humanReadableLanguage = languages[language]

  return (
    <div sx={{
      display: 'flex',
      position: 'absolute',
      right: 1,
      bottom: 1
    }}>
      {
        LanguageIcon &&
        <LanguageIcon
          alt={humanReadableLanguage || language}
          sx={{
            width: 40,
            height: 40,
          }}
        />
      }
    </div>
  )
}

export default LanguageTab