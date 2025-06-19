/* eslint-disable no-unused-vars */
/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/ui/ProjectModal.scss";

//Components
import Skeleton from "@mui/material/Skeleton";
import TechBadge from "./TechBadge";
import ProjectMenu from "../ProjectMenu";

//Icons
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { RocketIcon } from "@radix-ui/react-icons";

//React
import { useTheme } from "../../utils/theme.context";
import { useEffect, useState } from "react";

/*---------------------------------------------------------------------- */

const ProjectModal = ({ setOpenModal, projectId, modalArray }) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const handleClose = () => {
    const modal = document.querySelector(".projectModal");
    modal.classList.remove("fade-up");
    modal.classList.add("fade-down");
    setTimeout(() => {
      setOpenModal(false);
    }, 500); // Espera el tiempo de la animación para cerrar el modal
  };

  useEffect(() => {
    setProject(modalArray.find((project) => project.id === projectId));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <section className={`projectModal  ${theme} fade-up`}>
      <div className="close" onClick={() => handleClose()}>
        <ArrowDownIcon fontSize={"2em"} id="icon" />
      </div>
      <ProjectMenu />
      <div className="projectModal__container">
        {!isLoading && project !== null ? (
          <>
            <div
              className="info-container fade-in-animation"
              data-aos="fade-in"
            >
              <div className="details">
                <h3>{project.title}</h3>
                <span>Tech Stack</span>
                <div className="stack">
                  {project.stack.map((stackItem, idx) => (
                    <TechBadge type={stackItem} key={idx} />
                  ))}
                </div>
                <span>Core responsibilities</span>
                <div className="stack">
                  {project.core.map((coreItem, idx) => (
                    <TechBadge type={coreItem} key={idx} />
                  ))}
                </div>
                <div className="actions">
                  <a target="__blank" href={project.url} className="actions-item">
                    <p className="actions-item-text">Preview</p>
                    <RocketIcon className="actions-item-icon" />
                  </a>
                </div>
              </div>
              <div className="thumbnail">
                <img src={project.thumbnail} alt="" />
              </div>
            </div>
            <div className="description-container fade-in-animation">
              <h5>Project Description</h5>
             
                  {project.description}
             
            </div>
          </>
        ) : (
          <>
            <div className="info-container">
              <div className="details">
                <h3>
                  <Skeleton
                    variant="text"
                    sx={{ width: "350px", height: "50px" }}
                    animation="wave"
                  />
                </h3>
                <span>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: "250px", height: "40px" }}
                  />
                </span>
                <div className="stack">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "150px", height: "40px" }}
                  />
                </div>
                <span>
                  {" "}
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "250px", height: "40px" }}
                  />
                </span>
                <div className="stack">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: "150px", height: "40px" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "150px", height: "40px" }}
                  />
                </div>
                <div className="actions">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ width: "200px", height: "35px" }}
                  />
                </div>
              </div>
              <div className="thumbnail">
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  sx={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="description-container">
              <h5>
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ width: "250px", height: "100%" }}
                />
              </h5>
              <p>
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectModal;
