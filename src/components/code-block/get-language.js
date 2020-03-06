const getLanguage = className => className.replace(/language-/, ``).split(` `)[0]

export default getLanguage