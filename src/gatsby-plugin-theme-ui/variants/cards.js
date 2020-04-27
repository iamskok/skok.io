import { baseThemeSettings } from '../index'
import unitless from '../../utils/unitless'

const { rythm } = baseThemeSettings
const cards = {
  primary: {
    padding: 3,
    marginBottom: unitless(rythm) * 2 + `rem`,
    borderRadius: 1,
    boxShadow: `default`,
    transition: `box-shadow 400ms ease`,
    '&:hover': {
      boxShadow: `active`,
    }
  }
}

export default cards