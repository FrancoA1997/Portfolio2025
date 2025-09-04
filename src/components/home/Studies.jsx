import {
  CalendarIcon,
  GlobeIcon,
  BookmarkFilledIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import "../../scss/components/studies/studies.scss";
import { useTheme } from "../../utils/theme.context";
import { useLanguage } from "../../utils/language.context";

const studies = [
  {
    id: "1",
    institution: "Egg cooperation",
    degree: "Full Stack Developer",
    titulo: "Desarrollador web full stack",
    field: "Web development",
    campo: "Desarrollo web",
    startDate: "2021",
    endDate: "2022",
    location: "Online",
    descripcion:
      "Programa intensivo de formación en desarrollo web full stack, abarcando tanto frontend como backend. Incluye proyectos prácticos y colaboración en equipo. Para el backend se utilizo Java con springboot y para el frontend Bootstrap con HTML Y CSS.",
    description:
      "Intensive training program in full stack web development, covering both frontend and backend. Includes practical projects and team collaboration. For the backend, Java with Spring Boot was used, and for the frontend, Bootstrap with HTML and CSS.",
    badges: ["Java", "Spring Boot", "Bootstrap", "HTML", "CSS"],
    isCompleted: true,
    status: "Completed",
    estado: "Completado",
    color: "blue",
  },
  {
    id: "2",
    institution: "Online",
    degree: "Full Stack Web Developer - Self-taught",
    titulo: "Desarrollador web full stack - Autodidacta",
    field: "Web development",
    campo: "Desarrollo web",
    startDate: "2022",
    endDate: "♾️",
    location: "Online",
    description:
      "I specialize in full-stack web development with a strong focus on the frontend. My ongoing training is based on learning new technologies and industry best practices. Currently, I am deepening my knowledge in VPS administration and application deployment, using tools like Docker and Nginx.",
    descripcion:
      "Me especializo en desarrollo web full-stack con un fuerte enfoque en el frontend. Mi formación continua se basa en el aprendizaje de nuevas tecnologías y las mejores prácticas del sector. Actualmente, estoy profundizando mis conocimientos en la administración de VPS y en el despliegue de aplicaciones, utilizando herramientas como Docker y Nginx.",
    frontEndBadges: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "NextJs",
      "Sass",
      "Figma",
    ],
    backEndBadges: [
      "Node",
      "ExpressJS",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
    ],
    status: "In Progress",
    estado: "En curso",
    isCompleted: true,
  },
];

export default function EducationTimeline() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <section id="studies" className={`studies ${theme}`}>
      {/* Header */}
      <div className="studies__container">
        <div className={"studies__header"}>
          <h2 className={"title"}>Studies</h2>
        </div>

        {/* Timeline */}
        <div className={"timeline"}>
          <div className={"timelineItems"}>
            {studies.map((study) => (
              <div key={study.id} className={"timelineItem"}>
                {/* Punto en la línea */}
                <div className={"timelinePoint"}>
                  <div className={`${"point"}`}></div>
                </div>

                {/* Contenido */}
                <div className={"content"}>
                  <div className={"card"}>
                    {/* Header de la tarjeta */}
                    <div className={"cardHeader"}>
                      <div className={"cardTitle"}>
                        <div className={"badgeContainer"}>
                          <BookmarkFilledIcon />
                          <span
                            className={`${"badge-time"} ${
                              study.isCompleted === true
                                ? "completed"
                                : "inProgress"
                            }`}
                          >
                            {language === "en" ? study.status : study.estado}
                          </span>
                        </div>
                        <h3 className={"degree"}>
                          {" "}
                          {language === "en" ? study.degree : study.titulo}
                        </h3>
                        <p className={`${"institution"}`}>
                          {study.institution}
                        </p>
                        <p className={"field"}>
                          {" "}
                          {language === "en" ? study.field : study.campo}
                        </p>
                      </div>
                    </div>

                    {/* Información adicional */}
                    <div className={"metadata"}>
                      <div className={"metadataItem"}>
                        <CalendarIcon />
                        <span>
                          {study.startDate} - {study.endDate}
                        </span>
                      </div>
                      <div className={"metadataItem"}>
                        <GlobeIcon />
                        <span>{study.location}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    {study.description && (
                      <p className={"description"}>
                        {" "}
                        {language === "en"
                          ? study.description
                          : study.descripcion}
                      </p>
                    )}
                    <div className="badgesSection">
                      {study.frontEndBadges && (
                        <div className={"badgesContainer"}>
                          <h4>
                            {language === "en"
                              ? "Front-end Skills:"
                              : "Habilidades Front-end:"}
                          </h4>
                          <div className={"tech-badges"}>
                            {study.frontEndBadges.map((badge, index) => (
                              <span key={index} className={"tech-badge"}>
                                <TriangleRightIcon id="icon"/>
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {study.backEndBadges && (
                        <div className={"badgesContainer"}>
                          <h4>
                            {language === "en"
                              ? "Back-end Skills:"
                              : "Habilidades Back-end:"}
                          </h4>
                          <div className={"tech-badges"}>
                            {study.backEndBadges.map((badge, index) => (
                              <span key={index} className={"tech-badge"}>
                                <TriangleRightIcon id="icon" />
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
