import React from "react"
import { Helmet } from "react-helmet"

const Html = ({ language }) => (
  <Helmet>
    <html lang={language} />
  </Helmet>
)

export default Html
