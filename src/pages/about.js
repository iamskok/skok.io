/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const About = ({ data }) => {
  const {
    pages: {
      about: { to, breadcrumb, title, description, coverAlt, type },
    },
  } = useSiteMetadata()

  // const cover = data?.file?.childImageSharp?.fluid?.src
  const covers = data?.file?.childImageSharp

  return (
    <Layout
      to={to}
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      // cover={cover}
      covers={{ ...covers }}
      coverAlt={coverAlt}
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
        google4x3: fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
          src
        }
        google16x9: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
          src
        }
        google1x1: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
          src
        }
        twitter: fluid(maxWidth: 1600, maxHeight: 800, quality: 100) {
          src
        }
        facebook: fluid(maxWidth: 1600, maxHeight: 838, quality: 100) {
          src
        }
      }
    }
  }
`

export default About
