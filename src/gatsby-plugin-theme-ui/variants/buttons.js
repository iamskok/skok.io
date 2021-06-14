const buttons = {
  primary: {
    color: `background`,
    backgroundColor: `primary`,
    cursor: `pointer`,
    "&:hover": {
      backgroundColor: `secondary`,
    },
  },
  icon: {
    height: `iconButton`,
    width: `iconButton`,
    cursor: `pointer`,
    color: `primary`,
    transition: `button`,
    "&:hover": {
      color: `secondary`,
    },
  },
  iconSvg: {
    height: `icon`,
    width: `icon`,
    fill: `currentColor`,
  },
}

export default buttons
