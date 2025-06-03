/** @jsx jsx */
import { jsx } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
};

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <div
    sx={{
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: 4,
      color: `white`,
      background: bg,
      maxWidth: `100%`,
      display: `grid`,
      gridTemplateColumns: `repeat(5, 1fr)`,
      gridTemplateRows: `repeat(5, 1fr)`,
      gridColumnGap: `0px`,
      gridRowGap: `0px`,
    }}
  >
    <div
      sx={{
        gridArea:` 1 / 1 / 2 / 6`,
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [3, 4, 5],
        fontWeight: `medium`,
        lineHeight: 1.125,
        mb: 60,
      }}
    >
      {title}
    </div>
    <div
      sx={{
        gridArea: ` 2 / 1 / 6 / 6`,
        opacity: 1,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        p: {
          fontSize: [1, 2],
          color: `white`,
          margin: 0,
          lineHeight: 1.25,
        },
      }}
    >
      {children}
    </div>
  </div>
);

export default ProjectCard;
