const buttons = {
  icon: {
    height: `iconButton`,
    width: `iconButton`,
    cursor: `pointer`,
    color: `background`,
    backgroundColor: `secondary`,
    marginX: 2,
    opacity: 0.75,
    transition: `opacity 400ms ease`,
    '&:hover': {
      opacity: 1
    }
  },
  svgIcon: {
    height: `icon`,
    width: `icon`,
    fill: `currentColor`,
  }
}

export default buttons