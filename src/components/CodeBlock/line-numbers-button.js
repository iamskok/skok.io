/** @jsx jsx */
import { jsx, IconButton } from "theme-ui"

const LineNumbersButton = ({ onClick, lineNumbers }) => {
  const d = [
    `M3.04362 0H1.68831L0 1.29934V2.8537L1.56177 1.66365H1.60173V8.2899H3.04362V0Z`,
    `M0.0765901 21.5883H4.9384V20.1554H2.07459V20.0987L3.07026 18.9127C4.47219 17.3583 4.84849 16.5811 4.84849 15.638C4.84849 14.201 3.88278 13.185 2.42091 13.185C0.989011 13.185 0.00666004 14.2253 0.00999004 15.8525H1.37862C1.37529 15.0592 1.78821 14.5734 2.41092 14.5734C3.01032 14.5734 3.45654 15.0268 3.45654 15.7554C3.45654 16.4152 3.12354 16.8685 2.50416 17.5931L0.0765901 20.3254V21.5883Z`,
    `M2.5974 35C4.1292 35 5.22478 33.9759 5.22145 32.5592C5.22478 31.527 4.68531 30.7903 3.68298 30.6365V30.5717C4.44555 30.4057 4.9717 29.75 4.96837 28.819C4.9717 27.5116 4.0293 26.4834 2.61738 26.4834C1.21878 26.4834 0.1665 27.4792 0.14652 28.9121H1.52847C1.54512 28.2806 2.02131 27.8718 2.61072 27.8718C3.19347 27.8718 3.58308 28.3009 3.57975 28.9242C3.58308 29.5759 3.12687 30.0172 2.47086 30.0172H1.83483V31.3044H2.47086C3.24342 31.3044 3.72627 31.7739 3.72294 32.4418C3.72627 33.1016 3.26007 33.5549 2.60073 33.5549C1.9647 33.5549 1.48851 33.1502 1.46187 32.543H0.00999004C0.0333 33.9921 1.0989 35 2.5974 35Z`,
  ]

  return (
    <IconButton
      aria-label={`${
        lineNumbers ? "Toggled" : "Toggle"
      } code block line numbers`}
      sx={{ variant: "buttons.icon" }}
      onClick={onClick}
    >
      <svg
        width="30"
        height="35"
        viewBox="0 0 30 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {d.map((value, index) => (
          <path
            key={index}
            d={value}
            fill={lineNumbers ? `currentColor` : `rgba(0,0,0,0)`}
            sx={{
              transitionProperty: `fill`,
              transitionDuration: `${200 * (index + 1)}ms`,
              transitionTimingFunction: `ease`,
            }}
          />
        ))}
        <path
          d="M9.68254 2.59059H30V5.44025H9.68254V2.59059Z"
          fill="currentColor"
        />
        <path
          d="M9.68254 15.889H30V18.7386H9.68254V15.889Z"
          fill="currentColor"
        />
        <path
          d="M9.68254 29.1874H30V32.037H9.68254V29.1874Z"
          fill="currentColor"
        />
      </svg>
    </IconButton>
  )
}

export default LineNumbersButton
