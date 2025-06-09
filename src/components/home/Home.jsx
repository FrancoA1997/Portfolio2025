/* ------------------------------Imports---------------------------- */
//Styles
import { useEffect, useState } from "react";
import "../../scss/components/home/home.scss";
//Components

import HomeHeader from "./HomeHeader";
import Projects from "./Projects";
import ProjectModal from "../ui/ProjectModal";

import NavMenu from "../NavMenu";
//Icons
//Props
//React
//Images
//NextJs

/*---------------------------------------------------------------------- */
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      // Cuando el modal está cerrado, el body vuelve a scrollear normalmente
      document.body.style.overflow = "auto";
    }

    // Opcional: Función de limpieza para asegurar que el overflow se restablezca
    // en caso de que el componente Home se desmonte mientras el modal está abierto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  return (
    <main className="home">

      {openModal && (
        <ProjectModal key={openModal} setOpenModal={setOpenModal} />
      )}
      <NavMenu />
      <article>
        <HomeHeader />
        <Projects setOpenModal={setOpenModal} />
      </article>
    </main>
  );
};

export default Home;
