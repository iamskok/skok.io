/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import Layout from "../components/layout"
import GlitchText from "../components/glitch-text"

const IndexPage = () => (
  <Layout>
    <Flex
      sx={{
        flex: 1,
        flexDirection: "column",
        justifyContent: `center`,
        minHeight: `100%`,
      }}
    >
      <Styled.h1
        sx={{
          fontSize: 9,
          lineHeight: 1.25,
          letterSpacing: 2,
        }}
      >
        Hi! My name is{" "}
        <span sx={{ variant: `text.italicHeading` }}>Vladimir</span>.
      </Styled.h1>

      <Styled.h2
        sx={{
          color: `secondary`,
          marginTop: 0,
          fontSize: 6,
          wordSpacing: 4,
        }}
      >
        I move{" "}
        <GlitchText
          text='pixels'
          duration='5000ms'
          keyframesNum={20}
          limit={0.2}
          colors={["red", "green", "blue"]}
          position={[-5, 5]}
          shadow={[-2, 2]}
          backgroundColor='background'
        >
          pixels
        </GlitchText>{" "}
        on the web.
      </Styled.h2>
    </Flex>
  </Layout>
)

export default IndexPage
