/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import { graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Layout from "../components/Layout"
import GlitchText from "../components/GlitchText"

const IndexPage = ({ data }) => {
  const {
    pages: {
      home: { to, breadcrumb, title, description, coverAlt, type },
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
      pageName="home"
    >
      <Flex
        sx={{
          flex: 1,
          flexDirection: `column`,
          justifyContent: `center`,
          minHeight: `100%`,
        }}
        data-speakable="true"
      >
        <Styled.h1
          sx={{
            fontSize: 9,
            letterSpacing: 2,
            margin: 0,
          }}
        >
          Hi! My name is Vladimir.
        </Styled.h1>

        <Styled.h2
          sx={{
            color: `secondary`,
            margin: 0,
            fontSize: 6,
            wordSpacing: 4,
          }}
        >
          I move
          {` `}
          <GlitchText
            text="pixels"
            duration="5000ms"
            keyframesNum={20}
            limit={0.2}
            colors={[`red`, `green`, `blue`]}
            position={[-5, 5]}
            shadow={[-2, 2]}
            backgroundColor="background"
          >
            pixels
          </GlitchText>
          {` `}
          on the web.
        </Styled.h2>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        google1x1: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
          src
        }
        google4x3: fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
          src
        }
        google16x9: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
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

export default IndexPage
