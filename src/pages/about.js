/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const About = ({
  data: {
    site: {
      siteMetadata: {
        pages: {
          about: { to, breadcrumb, title, description, cover, coverAlt, type },
        },
      },
    },
  },
}) => {
  return (
    <Layout
      to={to}
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      cover={cover}
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
    site {
      siteMetadata {
        pages {
          about {
            to
            breadcrumb
            title
            description
            cover
            coverAlt
            type
          }
        }
      }
    }
  }
`

export default About
