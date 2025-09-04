/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/stack/stack.scss";
import { useTheme } from "../../utils/theme.context";
//Components
//Icons
import {
  GearIcon,
  RulerSquareIcon,
  FileTextIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import {
  SiReact,
  SiJavascript,
  SiSass,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiMongoose,
  SiNodedotjs,
  SiFigma,
  SiPostman,
  SiCanva,
  SiRedux,
  SiDocker,
  SiGit,
  SiGithub,
  SiV0,
  SiVercel,
  SiNetlify,
  SiHostinger,
} from "@icons-pack/react-simple-icons";
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const Stack = () => {
  const { theme } = useTheme();
  const frontend = [
    {
      icon: <SiReact className="icon" />,
      name: "React",
      background: "#61DAFB",
      shadow: "#61DAFB",
    },
    {
      icon: <SiNextdotjs className="icon" />,
      name: "Next.js",
      background: "#000000",
      shadow: "#ffffff",
    },
    {
      icon: <SiVite className="icon" />,
      name: "Vite",
      background: "#646CFF",
      shadow: "#646CFF",
    },
    {
      icon: <SiJavascript className="icon" />,
      name: "JavaScript",
      background: "#F7DF1E",
      shadow: "#F7DF1E",
    },
    {
      icon: <SiTypescript className="icon" />,
      name: "TypeScript",
      background: "#3178C6",
      shadow: "#3178C6",
    },
    {
      icon: <SiRedux className="icon" />,
      name: "Redux",
      background: "#764ABC",
      shadow: "#764ABC",
    },
    {
      icon: <SiSass className="icon" />,
      name: "Sass",
      background: "#CC6699",
      shadow: "#CC6699",
    },
    {
      icon: <SiMui className="icon" />,
      name: "Material-UI",
      background: "#007FFF",
      shadow: "#007FFF",
    },
  ];

  const backend = [
    {
      icon: <SiExpress className="icon" />,
      name: "Express",
      background: "#000000",
      shadow: "#ffffff",
    },

    {
      icon: <SiNodedotjs className="icon" />,
      name: "Node.js",
      background: "#339933",
      shadow: "#339933",
    },

    {
      icon: <SiPostman className="icon" />,
      name: "Postman",
      background: "#F24E1E",
      shadow: "#F24E1E",
    },
    {
      icon: <SiDocker className="icon" />,
      name: "Docker",
      background: "#2496ED",
      shadow: "#2496ED",
    },
  ];
  const database = [
    {
      icon: <SiMongodb className="icon" />,
      name: "MongoDB",
      background: "#47A248",
      shadow: "#47A248",
    },
    {
      icon: <SiMysql className="icon" />,
      name: "MySQL",
      background: "#4479A1",
      shadow: "#4479A1",
    },
    {
      icon: <SiPrisma className="icon" />,
      name: "Prisma",
      background: "#2D3748",
      shadow: "#2D3748",
    },
    {
      icon: <SiMongoose className="icon" />,
      name: "Mongoose",
      background: "#880000",
      shadow: "#880000",
    },
  ];
  const design = [
    {
      icon: <SiFigma className="icon" />,
      name: "Figma",
      background: "#F24E1E",
      shadow: "#F24E1E",
    },
    {
      icon: <SiCanva className="icon" />,
      name: "Canva",
      background: "#CC6699",
      shadow: "#CC6699",
    },
    {
      icon: <SiV0 className="icon" />,
      name: "V0",
      background: "#000000",
      shadow: "#000000",
    },
    {
      icon: <SiVercel className="icon" />,
      name: "Vercel",
      background: "#000000",
      shadow: "#000000",
    },
    {
      icon: <SiGit className="icon" />,
      name: "Git",
      background: "#F05032",
      shadow: "#F05032",
    },
    {
      icon: <SiGithub className="icon" />,
      name: "GitHub",
      background: "#181717",
      shadow: "#181717",
    },
    {
      icon: <SiNetlify className="icon" />,
      name: "Netlify",
      background: "#00C7B7",
      shadow: "#00C7B7",
    },
  ];
  return (
    <section id="stack" className={`${theme} stack`}>
      <div className="stack__container">
        <h2>Stack</h2>

        <div className="stack__items">
          <div className="stack__item">
            <h3>
              Frontend <ViewGridIcon className="title-icon" />
            </h3>
            <div className="stack__item-techs">
              {frontend.map((item, idx) => (
                <div
                  key={idx}
                  className="stack__item-techs-item"
                  data-text={item.name}
                  style={{
                    background: item.background,
                    "--shadow-color": item.shadow,
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="stack__item">
            <h3>
              Backend <GearIcon className="title-icon" />
            </h3>
            <div className="stack__item-techs">
              {backend.map((item, idx) => (
                <div
                  key={idx}
                  className="stack__item-techs-item"
                  data-text={item.name}
                  style={{
                    background: item.background,
                    "--shadow-color": item.shadow,
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="stack__item">
            <h3>
              Database <FileTextIcon className="title-icon" />
            </h3>
            <div className="stack__item-techs">
              {database.map((item, idx) => (
                <div
                  key={idx}
                  className="stack__item-techs-item"
                  data-text={item.name}
                  style={{
                    background: item.background,
                    "--shadow-color": item.shadow,
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="stack__item">
            <h3>
              Design / Tools <RulerSquareIcon className="title-icon" />
            </h3>
            <div className="stack__item-techs">
              {design.map((item, idx) => (
                <div
                  key={idx}
                  className="stack__item-techs-item"
                  data-text={item.name}
                  style={{
                    background: item.background,
                    "--shadow-color": item.shadow,
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
