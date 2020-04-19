/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
} from 'theme-ui'
import PrismThemeProvider from './code-block/prism-theme-provider'
import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'

// const isBrowser = () => typeof window !== 'undefined'
// const { fonts: { safe: safeFonts } } = { ...theme }
// const safeFontsTheme = {
//   ...Object.assign(
//     {},
//     theme,
//     { fonts: safeFonts }
//   )
// }
// const currentTheme = isBrowser() &&
//   sessionStorage.getItem('fontsLoaded') ?
//   theme :
//   safeFontsTheme

export const wrapRootElement = ({ element }) => {
  return (
    <PrismThemeProvider>
      {jsx(ThemeProvider, {
        theme,
        components,
      },
        element
      )}
    </PrismThemeProvider>
  )
}
