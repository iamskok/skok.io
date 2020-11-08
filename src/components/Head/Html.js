import React from "react"
import { Helmet } from "react-helmet"

const Html = ({ language }) => (
  <Helmet>{language && <html lang={language} />}</Helmet>
)

export default Html
