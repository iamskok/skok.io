import dracula from 'prism-react-renderer/themes/dracula'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'

export default {
  ...duotoneLight,
  modes: {
    dark: dracula,
    darkAlternative: nightOwl,
  }
}