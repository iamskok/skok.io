/** @jsx jsx */
import { jsx } from "theme-ui"

const HomePageMicroformats2 = () => {
  return (
    <div sx={{ display: `none` }}>
      <img
        sx={{ display: `none` }}
        src="https://pbs.twimg.com/profile_images/720846092531707905/fit8T8Xa_400x400.jpg"
        className="u-photo"
        alt="Vladimir Skok avatar"
      />
      <a
        sx={{ display: `none` }}
        className="p-name u-url"
        href="https://skok.club"
      >
        Vladimir Skok
      </a>
      <time className="dt-bday" dateTime="1990-9-28"></time>
      <data className="p-locality" value="Atlanta"></data>
      <data className="p-region" value="Georgia"></data>
      <data className="p-country-name" value="USA"></data>
      <div className="p-note" sx={{ display: `none` }}>
        Software Engineer
      </div>
    </div>
  )
}

export default HomePageMicroformats2
