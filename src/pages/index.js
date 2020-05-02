/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Flex
      sx={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: `center`,
        minHeight: `100%`
      }}
    >
      <Styled.h1
        sx={{
          fontSize: 8,
          lineHeight: 1.25
        }}
      >
        Hi! My name is <span sx={{ variant: `text.italicHeading` }}>
          Vladimir</span>.
      </Styled.h1>

      <Styled.h2
        sx={{
          color: `secondary`,
          marginTop: 0
        }}
      >
        I move <span sx={{
          textDecoration: `underline`,
        }}>pixels</span> on the web.
      </Styled.h2>
    </Flex>
  </Layout>
)

export default IndexPage