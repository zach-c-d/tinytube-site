import * as React from "react";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { withPrefix } from "gatsby";
import AvatarPic from "../../../../static/avatar-pipette.jpg";
import { StaticImage } from "gatsby-plugin-image";
import { UpDown, UpDownWide } from "../styles/animations";
import AboutMDX from "../sections/about.mdx";
import AboutPipettes from "../sections/about_pipettes.mdx";

import { Card, Text } from "theme-ui";

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.35} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
        <Card
          sx={{
            marginTop: `50px`,
            marginBottom: `50px`,
            maxWidth: `100%`,
            padding: `1%`,
            background: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            borderRadius: 8,
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "normal",
            alignContent: "normal",
          }}
        >
          <Card
            sx={{
              display: "block",
              // flexGrow: 1,
              // maxWidth: `50%`,
              height: `100%`,
              flexGrow: 1,
              padding: `1%`,
            }}
          >
            <StaticImage
              src="../images/avatar-pipette.png"
              sx={{ height: `100%` }}
            ></StaticImage>
            <Text>(Avatar 2009)</Text>
          </Card>
          <Card
            sx={{
              display: "block",
              flexGrow: 1,
              // maxWidth: `50%`,
              height: `100%`,
              padding: `1%`,
            }}
          >
            <StaticImage
              src="../images/csi-vegas.webp"
              sx={{ height: `100%` }}
            ></StaticImage>
            <Text>(CSI:Vegas 2021)</Text>
          </Card>
        </Card>

        <AboutPipettes />
      </Inner>
    </Content>
    {/* <Content speed={0.4} offset={0.75} factor={factor}>
      <Inner></Inner>
    </Content> */}
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset * 1.5}
      factor={factor * 1.5}
    />
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
);

export default About;
