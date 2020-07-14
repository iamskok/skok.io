/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, Flex, Box, Styled } from 'theme-ui'
import debounce from 'lodash/debounce'
import Link from './link'

const TweatableSelection = () => {
  const [tweetableText, setTweetableText] = useState()

  useEffect(() => {
    document.onselectionchange = debounce(() => {
      const text = document.getSelection().toString()
      setTweetableText(text)
    }, 200)
  }, [])

  return (
    tweetableText ?
    <Flex
        sx={{
          position: `fixed`,
          top: 0,
          left: 0,
          zIndex: `tweatableSelection`,
          justifyContent: `center`,
          alignItems: `center`,
          width: `100%`,
          color: `text`,
          backgroundColor: `background`,
          borderBottom: `1px solid`,
          borderColor: `primary`,
        }}
      >
      <Box
        sx={{
          padding: 3,
          maxWidth: `container`,
        }}
      >
        <Styled.p>
          { tweetableText }
        </Styled.p>
        <Link
          to={
            `https://twitter.com/intent/tweet?text=` +
            encodeURI(tweetableText + ` ` + window.location.href)
          }
        >
          Tweet this
        </Link>
      </Box>
    </Flex> :
    null
  )
}

export default TweatableSelection