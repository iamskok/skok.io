import { baseThemeSettings } from "../index"
import unitless from "../../utils/unitless"

const { rythm } = baseThemeSettings

const messages = {
  secondary: {
    color: `text`,
    backgroundColor: `secondary`,
    marginBottom: unitless(rythm) * 2 + `rem`,
    borderLeftColor: `primary`,
    borderLeftWidth: 3,
    borderLeftStyle: `solid`,
  },
}

export default messages
