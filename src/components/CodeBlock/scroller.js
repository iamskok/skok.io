import {
  CODE_BLOCK_CLASS as CLASS,
  CODE_BLOCK_CONTAINER_CLASS as CONTAINER_CLASS,
  CODE_BLOCK_SCROLL_STEP as SCROLL_STEP,
} from "../../utils/constants"

const isEventTargetClass = (event, className) =>
  Boolean(event?.target?.classList?.contains(className))

const scroll = (event, direction) => {
  const scrollStep = direction === `left` ? -1 * SCROLL_STEP : SCROLL_STEP

  if (isEventTargetClass(event, CLASS)) {
    event.target.querySelector(`.${CONTAINER_CLASS}`).scrollLeft += scrollStep
  }
}

export default scroll
