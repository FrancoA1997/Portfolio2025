/* eslint-disable no-unused-vars */
/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/projects/Projects.scss";
//Components
import { AspectRatio } from "radix-ui";
// import CustomToolTip from "../ui/ToolTip";
//Icons

//Props
//React
//Images
import thumbnailTest from "/images/thumbnail-test.png";
import { PlusIcon } from "@radix-ui/react-icons";
import destinyLogo from "/logoDestiny.webp";
import ProjectBadge from "../ui/TechBadge.jsx";
import { useTheme } from "../../utils/theme.context.jsx";
//NextJs
/*---------------------------------------------------------------------- */

const Projects = ({ setOpenModal }) => {
  const { theme } = useTheme();
  return (
    <section className={`projects light ${theme}`}>
     
      <div className="projects__container ">
        <h2>Projects & Experience</h2>
        <div className="projects__content blue">
          <div className="title">
            <h3>Freelance web development projects</h3>
          </div>

          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>DestinyTI Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"design"} />
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>

              <div className="links  ">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Lexlogos Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"design"} />
                <ProjectBadge type={"fullstack"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"next"} />
                <ProjectBadge type={"prisma"} />
                <ProjectBadge type={"mongo"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>
              <div className="links  ">
                <div onClick={() => setOpenModal(true)} className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Frutales Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>
              <div className="links">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Solmedicam Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>

              <div className="links">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content black">
          <div className="title">
            <h3>
              Freelance templates developed for Destiny
              <img src={destinyLogo} alt="destiny_logo" />
            </h3>
          </div>

          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>DestinyTI Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"design"} />
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>

              <div className="links  ">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Lexlogos Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"design"} />
                <ProjectBadge type={"fullstack"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"next"} />
                <ProjectBadge type={"prisma"} />
                <ProjectBadge type={"mongo"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>
              <div className="links  ">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Frutales Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>
              <div className="links">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="project_title">
                <h4>Solmedicam Website</h4>
              </div>
              <div className="badges">
                <ProjectBadge type={"frontend"} />
                <ProjectBadge type={"api"} />
                <ProjectBadge type={"optimization"} />
                <ProjectBadge type={"react"} />
                <ProjectBadge type={"vite"} />
                <ProjectBadge type={"sass"} />
                <ProjectBadge type={"material"} />
              </div>

              <div className="links">
                <div className="links-item">
                  <p className="links-item-text">Info</p>
                  <PlusIcon className="links-item-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
