import dark from 'prism-react-renderer/themes/duotoneDark'
import light from 'prism-react-renderer/themes/duotoneLight'

const prismThemes = {
  light: {
    ...light,
    caret: '#000',
    count: '#000',
    lineHighlight: '#777',
  },
  dark: {
    ...dark,
    caret: '#fff',
    count: '#fff',
    lineHighlight: '#eee'
  }
}

export default prismThemes
