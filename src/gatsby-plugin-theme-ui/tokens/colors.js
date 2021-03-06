const light = {
  text: `hsl(0, 0%, 0%)`,
  background: `hsl(0, 0%, 100%)`,
  primary: `hsl(240, 87%, 50%)`,
  secondary: `hsl(300, 100%, 40%)`,
  highlight: `hsl(300, 100%, 47%)`,
  accent: `hsl(290, 100%, 80%)`,
  muted: `hsl(240, 100%, 98%)`,
  gray: `hsl(210, 50%, 60%)`,
}

const dark = {
  text: `hsl(210, 50%, 96%)`,
  background: `hsl(230, 25%, 13%)`,
  primary: `hsl(260, 100%, 80%)`,
  secondary: `hsl(290, 100%, 80%)`,
  highlight: `hsl(260, 20%, 40%)`,
  accent: `hsl(290, 100%, 80%)`,
  muted: `hsl(229, 22%, 10%)`,
  gray: `hsl(210, 50%, 60%)`,
}

const codeLight = {
  codeHighlight: `hsl(269, 100%, 93%)`,
  codeHighlightNumber: `hsl(302, 100%, 50%)`,
  codeChanged: `hsl(221, 94%, 81%)`,
  codeDeleted: `hsla(1, 83%, 63%, 0.56)`,
  codeInserted: `hsl(221, 63%, 56%)`,
  codeAttrName: `hsl(221, 63%, 56%)`,
  codeComment: `hsl(223, 14%, 65%)`,
  codeString: `hsl(221, 63%, 56%)`,
  codeUrl: `hsl(221, 63%, 56%)`,
  codeVariable: `hsl(1, 48%, 59%)`,
  codeNumber: `hsl(315, 90%, 35%)`,
  codeBuiltIn: `hsl(221, 63%, 56%)`,
  codeChar: `hsl(221, 63%, 56%)`,
  codeConstant: `hsl(221, 63%, 56%)`,
  codeFunction: `hsl(279, 50%, 53%)`,
  codePunctuation: `hsl(279, 50%, 53%)`,
  codeSelector: `hsl(279, 50%, 53%)`,
  codeDoctype: `hsl(279, 50%, 53%)`,
  codeClassName: `hsl(0, 0%, 7%)`,
  codeTag: `hsl(279, 50%, 53%)`,
  codeOperator: `hsl(182, 86%, 33%)`,
  codeKeyword: `hsl(182, 86%, 33%)`,
  codeBoolean: `hsl(0, 44%, 53%)`,
  codeProperty: `hsl(182, 86%, 33%)`,
  codeNamespace: `hsl(182, 86%, 33%)`,
}

const codeDark = {
  codeHighlight: `hsl(260, 100%, 30%)`,
  codeHighlightNumber: `hsl(321, 100%, 50%)`,
  codeChanged: `hsl(221, 94%, 81%)`,
  codeDeleted: `hsla(1, 83%, 63%, 0.56)`,
  codeInserted: `hsl(84, 62%, 63%)`,
  codeAttrName: `hsl(84, 62%, 63%)`,
  codeComment: `hsl(180, 9%, 43%)`,
  codeString: `hsl(84, 62%, 63%)`,
  codeUrl: `hsl(84, 62%, 63%)`,
  codeVariable: `hsl(217, 34%, 88%)`,
  codeNumber: `hsl(14, 90%, 70%)`,
  codeBuiltin: `hsl(221, 100%, 75%)`,
  codeChar: `hsl(221, 100%, 75%)`,
  codeConstant: `hsl(221, 100%, 75%)`,
  codeFunction: `hsl(221, 100%, 75%)`,
  codePunctuation: `hsl(276, 68%, 75%)`,
  codeSelector: `hsl(276, 68%, 75%)`,
  codeDoctype: `hsl(276, 68%, 75%)`,
  codeClassName: `hsl(33, 100%, 77%)`,
  codeTag: `hsl(169, 56%, 68%)`,
  codeOperator: `hsl(169, 56%, 68%)`,
  codeKeyword: `hsl(169, 56%, 68%)`,
  codeBoolean: `hsl(350, 100%, 67%)`,
  codeProperty: `hsl(174, 42%, 65%)`,
  codeNamespace: `hsl(197, 31%, 77%)`,
}

export default {
  ...light,
  ...codeLight,
  modes: {
    dark: {
      ...dark,
      ...codeDark,
    },
  },
}
