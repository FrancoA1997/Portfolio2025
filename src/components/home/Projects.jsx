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
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { RocketIcon } from "@radix-ui/react-icons";
import ProjectBadge from "../ui/TechBadge.jsx";
import { useTheme } from "../../utils/theme.context.jsx";

//NextJs
/*---------------------------------------------------------------------- */

const Projects = ({
  setOpenModal,
  setSelectedProjectId,
  setModalArray,
  projects,
  templates,
}) => {
  const { theme } = useTheme();

  const handleProject = (id, type) => {
    if (type === "projects") {
      setModalArray(projects);
    } else {
      setModalArray(templates);
    }

    setSelectedProjectId(id);
    setOpenModal(true);
  };
  return (
    <section className={`projects light ${theme}`}>
      <div className="projects__container ">
        <h2>Freelance projects</h2>
        <div className="projects__content">
          {projects.map((project) => (
            <div key={project.id} className="projects__item">
              <AspectRatio.Root ratio={16 / 9}>
                <img src={project.thumbnail} alt="" />
              </AspectRatio.Root>
              <div className="projects__item-info">
                <div className="project_title">
                  <h4>{project.title}</h4>
                </div>
                <div className="badges">
                  {project.core.map((coreItem, idx) => (
                    <ProjectBadge key={idx} type={coreItem} />
                  ))}
                  {project.stack.map((stackItem, idx) => (
                    <ProjectBadge key={idx} type={stackItem} />
                  ))}
                </div>

                <div className="links  ">
                  <a href={project.url} target="__blank" className="links-item">
                    <p className="links-item-text">preview</p>
                    <RocketIcon className="icon" />
                  </a>
                  <div
                    onClick={() => handleProject(project.id, "projects")}
                    className="links-item"
                  >
                    <p className="links-item-text">More</p>
                    <InfoCircledIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Freelance templates</h2>

        <div className="projects__content black">
          {templates.map((project) => (
            <div key={project.id} className="projects__item">
              <AspectRatio.Root ratio={16 / 9}>
                <img src={project.thumbnail} alt="" />
              </AspectRatio.Root>
              <div className="projects__item-info">
                <div className="project_title">
                  <h4>{project.title}</h4>
                </div>
                <div className="badges">
                  {project.core.map((coreItem, idx) => (
                    <ProjectBadge key={idx} type={coreItem} />
                  ))}
                  {project.stack.map((stackItem, idx) => (
                    <ProjectBadge key={idx} type={stackItem} />
                  ))}
                </div>

                <div className="links  ">
                  <a href={project.url} target="__blank" className="links-item">
                    <p className="links-item-text">preview</p>
                    <RocketIcon className="icon" />
                  </a>
                  <div
                    onClick={() => handleProject(project.id, "templates")}
                    className="links-item"
                  >
                    <p className="links-item-text">More</p>
                    <InfoCircledIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
