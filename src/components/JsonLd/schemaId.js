import { siteUrl } from "../../../site-metadata"

const schemId = (hash, url = siteUrl) => `${url}/#${hash}`

export default schemId
