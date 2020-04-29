const buttons = {
  primary: {
    color: 'background',
    bg: 'primary',
    '&:hover': {
      bg: 'secondary',
    }
  },
  icon: {
    height: `iconButton`,
    width: `iconButton`,
    cursor: `pointer`,
    color: `primary`,
    transition: `color 400ms ease`,
    '&:hover': {
      color: `secondary`
    }
  },
  iconSvg: {
    height: `icon`,
    width: `icon`,
    fill: `currentColor`,
  },
}

export default buttons