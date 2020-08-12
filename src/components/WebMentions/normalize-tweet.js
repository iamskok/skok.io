const twitterHandleRegex = /(^|[^@\w])@(\w{1,15})\b/g
const twitterHashtagRegex = /#(\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g
const URLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/g

const normalizeTweet = str => {
  const handleMatches = str.match(twitterHandleRegex)
  const hashtagMatches = str.match(twitterHashtagRegex)
  const URLMatches = str.match(URLRegex)
  const domainMatches = str.match(domainRegex) // fix it

  handleMatches &&
    handleMatches.map(match => {
      str = str.replace(
        match,
        `<a href="https://twitter.com/${match
          .trim()
          .replace(`@`, ``)}">${match}</a>` + ` `
      )
    })

  hashtagMatches &&
    hashtagMatches.map(match => {
      str = str.replace(
        match,
        `<a href="https://twitter.com/hashtag/${match.replace(
          `#`,
          ``
        )}">${match}</a>` + ` `
      )
    })

  URLMatches &&
    URLMatches.map(
      match =>
        (str = str.replace(match, `<a href="${match}">${match}</a>` + ` `))
    )

  domainMatches &&
    domainMatches.map(
      match =>
        (str = str.replace(
          match,
          `<a href="https://${match}">${match}</a>` + ` `
        ))
    )

  return str.trim()
}

export default normalizeTweet
