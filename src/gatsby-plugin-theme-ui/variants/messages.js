import { baseThemeSettings } from "../index"
import unitless from "../../utils/unitless"

const { rythm } = baseThemeSettings

const messages = {
  primary: {
    color: `text`,
    backgroundColor: `secondary`,
    marginBottom: unitless(rythm) * 2 + `rem`,
    borderLeft: 0,
  },
}

export default messages
