import {
//   base,
//   system,
//   funk,
//   future,
//   roboto,
  dark,
  deep,
//   swiss,
//   tosh,
//   bootstrap,
//   bulma,
//   tailwind
} from '@theme-ui/presets'

export default {
  text: '#000',
  background: '#fff',
  primary: '#33e',
  secondary: '#11a',
  muted: '#f6f6f6',
  white: '#fff',
  black: '#000',
  modes: {
    dark: {...dark.colors},
    // base: {...base.colors},
    // system: {...system.colors},
    // funk: {...funk.colors},
    // future: {...future.colors},
    // roboto: {...roboto.colors},
    deep: { ...deep.colors },
    // swiss: {...swiss.colors},
    // tosh: {...tosh.colors},
    // bootstrap: {...bootstrap.colors},
    // bulma: {...bulma.colors},
    // tailwind: { ...tailwind.colors }
  }
}
