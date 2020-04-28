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
  },
  iconSvg: {
    height: `icon`,
    width: `icon`,
    fill: `currentColor`,
  },
  codeBlock: {
    variant: `buttons.icon`,
    height: `iconButtonSm`,
    width: `iconButtonSm`,
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    }
  },
  iconSvgSm: {
    variant: `buttons.iconSvg`,
    height: `iconSm`,
    width: `iconSm`,
  },
}

export default buttons