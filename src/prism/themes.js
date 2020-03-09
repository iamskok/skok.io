import dark from 'prism-react-renderer/themes/nightOwl'
import light from 'prism-react-renderer/themes/nightOwlLight'
// import colors from '../gatsby-plugin-theme-ui/colors'

const prismThemes = {
  ...light,
  caret: {
    color: 'black',
  },
  count: {
    color: 'black',
    backgroundColor: '#b690ff',
  },
  lineHighlight: {
    backgroundColor: '#fab3ff',
  },
  modes: {
    dark: {
      ...dark,
      caret: {
        color: 'white',
      },
      count: {
        color: 'white',
        backgroundColor: '#4b0050',
      },
      lineHighlight: {
        backgroundColor: '#5b00bf',
      },
    }
  }
}

export default prismThemes
