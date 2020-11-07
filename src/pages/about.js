/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

const About = ({ data }) => {
  const {
    pages: {
      about: { to, title, description, coverAlt, type, breadcrumb },
    },
  } = useSiteMetadata()
  const covers = data?.file?.childImageSharp

  return (
    <Layout
      to={to}
      title={title}
      description={description}
      covers={{ ...covers }}
      coverAlt={coverAlt}
      breadcrumb={breadcrumb}
      type={type}
      pageName="about"
    >
      <Styled.h1>About</Styled.h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        ...ChildImageSharpFields
      }
    }
  }
`

export default About
