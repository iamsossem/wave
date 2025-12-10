import ClipText from "./ClipText"
import ComusPage from "./ComusPage"
import HozVideo from "./HozVideo"
import MainVideo from "./MainVideo"
import Marquee from "./Marquee"

const Wave = () => {
  return (
    <div id="wave">
      <MainVideo />
      <Marquee />
      <HozVideo />
      <ClipText />
      <ComusPage />
    </div>
  )
}

export default Wave