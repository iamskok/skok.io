/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Layout from "../components/Layout"

const About = () => {
  const {
    pages: {
      about: { to, breadcrumb, title, description, cover, coverAlt, type },
    },
  } = useSiteMetadata()

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

export default About
