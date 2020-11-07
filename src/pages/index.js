/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"
import GlitchText from "../components/GlitchText"

const IndexPage = ({ data }) => {
  const {
    pages: {
      home: { to, title, description, coverAlt, type, breadcrumb },
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
        ...ChildImageSharpFields
      }
    }
  }
`

export default IndexPage
