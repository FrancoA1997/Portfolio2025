/* eslint-disable no-unused-vars */
/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/ui/ProjectModal.scss";

//Components
import Skeleton from "@mui/material/Skeleton";
import TechBadge from "./TechBadge";

//Icons
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { RocketIcon } from "@radix-ui/react-icons";
import { CheckCircledIcon } from "@radix-ui/react-icons";
//React
import { useTheme } from "../../utils/theme.context";
import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/language.context";

/*---------------------------------------------------------------------- */

const ProjectModal = ({ setOpenModal, projectId, modalArray }) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const { language } = useLanguage();
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
    }, 1200);
  }, []);

  return (
    <section className={`projectModal  ${theme} fade-up`}>
      <div className="close" onClick={() => handleClose()}>
        <ArrowDownIcon fontSize={"2em"} id="icon" />
      </div>

      <div className="projectModal__container">
        {!isLoading && project !== null ? (
          <>
            <div className="actions">
              <a target="__blank" href={project.url} rel="noopener noreferrer" className="actions-item">
                <p className="actions-item-text">
                  {language === "en" ? "Deploy" : "Despliegue"}
                </p>
                <RocketIcon className="actions-item-icon" />
              </a>
            </div>
            <h3>{project.title}</h3>
            <div
              className="info-container fade-in-animation"
              data-aos="fade-in"
            >
              <div className="details">
                <div className="details-item">
                  <span>
                    {language === "en" ? "Tech Stack" : "Stack de tecnologias"}
                  </span>
                  <div className="stack">
                    {project.stack.map((stackItem, idx) => (
                      <TechBadge type={stackItem} key={idx} />
                    ))}
                  </div>
                </div>
                <div className="details-item">
                  <span>
                    {language === "en"
                      ? "Core responsibilities"
                      : "Responsabilidades clave"}
                  </span>
                  <div className="stack">
                    {project.core.map((coreItem, idx) => (
                      <TechBadge type={coreItem} key={idx} />
                    ))}
                  </div>
                </div>
                  <div className="actions-mobile">
              <a target="__blank" href={project.url} rel="noopener noreferrer" className="actions-mobile-item">
                <p className="actions-mobile-item-text">
                  {language === "en" ? "Deploy" : "Despliegue"}
                </p>
                <RocketIcon className="actions-mobile-item-icon" />
              </a>
            </div>
              </div>
              <div className="thumbnail">
                <img src={project.thumbnail} alt="" />
              </div>
            </div>
            <div className="description-container fade-in-animation">
              <div className="description">
                <h5>
                  {language === "en"
                    ? "Project Description"
                    : "Descripcion del proyecto"}
                </h5>

                {language === "en" ? project.description : project.descripcion}
              </div>
              <div className="responsabilities">
                <h5>
                  {language === "en" ? "Responsibilities" : "Responsabilidades"}
                </h5>
                {language === "en" ? (
                  <ul className="responsabilities-list">
                    {project.responsabilities.map((item, idx) => (
                      <li key={item}>
                        <CheckCircledIcon fontSize={"20px"} id="icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="responsabilities-list">
                    {project.responsabilidades.map((item, idx) => (
                      <li key={item}>
                        <CheckCircledIcon fontSize={"20px"} id="icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <Skeleton
              width={"100%"}
              height={"100%"}
              sx={{ width: "100%", height: "100%" }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton
              width={"100%"}
              height={"100%"}
              sx={{ width: "100%", height: "100%" }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton
              width={"100%"}
              height={"100%"}
              sx={{ width: "100%", height: "100%" }}
              animation="wave"
              variant="rectangular"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectModal;
