/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";

import ProjectsMDX from "../sections/projects.mdx";
import Footer from "./footer";
import ContactMDX from "../sections/contact.mdx";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [0, 0, 0, 5],
            gridTemplateColumns: [`1fr`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
        <div sx={{ paddingTop: `100px` }}>
          <ContactMDX />
        </div>
        <Footer />
      </Inner>
    </Content>
  </div>
);

export default Projects;
