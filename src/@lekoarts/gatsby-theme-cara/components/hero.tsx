/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import MicroCartIcon from "../../../../static/microCart.png"
import { withPrefix } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import { hidden } from "../styles/utils"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Intro from "../sections/intro.mdx"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      {/* <UpDown>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDown> */}
        {/* <StaticImage image={MicroCartIcon}/> */}
        <img src={MicroCartIcon} width={500} sx={{      position: `absolute`,
      stroke: `currentColor`,
      fill: `currentColor`,
      display: `block`,
      color: `currentcolor`,
      width: "50%",
      left: "50%",
      bottom: "30%"}}></img>
      <UpDownWide>
        {/* <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" /> */}
      </UpDownWide>
      {/* <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />  */}
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
  </div>
)

export default Hero
