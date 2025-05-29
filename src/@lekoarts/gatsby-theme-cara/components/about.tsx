import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { withPrefix } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import { UpDown, UpDownWide } from "../styles/animations"
import AboutMDX from "../sections/about.mdx"
import AboutPipettes from "../sections/about_pipettes.mdx"


const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={0.5} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset*1.5}
      factor={factor*1.5}
    />
    {/* <Content speed={0.4} offset={0.8} factor={factor}>
      <Inner>
        <AboutPipettes />

      </Inner>
    </Content> */}
    {/* <StaticImage src="../../static/avatar-pipette.png" width={600} alt="pipette in avatar" /> */}
    {/* <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
      </UpDown>
      <UpDownWide>
      </UpDownWide>
    </Divider> */}
  </div>
)

export default About
