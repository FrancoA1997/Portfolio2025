import {
  CalendarIcon,
  GlobeIcon,
  BookmarkFilledIcon,
} from "@radix-ui/react-icons";
import "../../scss/components/studies/studies.scss";
import { useTheme } from "../../utils/theme.context";

const studies = [
  {
    id: "1",
    institution: "Universidad Tecnológica Nacional",
    degree: "Ingeniería en Sistemas",
    field: "Desarrollo de Software",
    startDate: "2020",
    endDate: "2024",
    location: "Buenos Aires, Argentina",
    description:
      "Especialización en desarrollo web frontend y backend, con enfoque en tecnologías modernas como React, Node.js y bases de datos relacionales.",
    status: "completed",
    gpa: "8.5/10",
    color: "blue",
  },
  {
    id: "2",
    institution: "Platzi",
    degree: "Escuela de JavaScript",
    field: "Desarrollo Frontend",
    startDate: "2023",
    endDate: "2024",
    location: "Online",
    description:
      "Curso intensivo de JavaScript moderno, React, TypeScript y herramientas de desarrollo frontend.",
    status: "completed",
    color: "green",
  },
  {
    id: "3",
    institution: "FreeCodeCamp",
    degree: "Full Stack Web Development",
    field: "Desarrollo Web",
    startDate: "2022",
    endDate: "En curso",
    location: "Online",
    description:
      "Certificación en desarrollo web completo incluyendo HTML, CSS, JavaScript, React, Node.js y MongoDB.",
    status: "in-progress",
    color: "purple",
  },
  {
    id: "4",
    institution: "Udemy",
    degree: "React Avanzado",
    field: "Frontend Development",
    startDate: "2023",
    endDate: "2024",
    location: "Online",
    description:
      "Curso especializado en React avanzado, hooks personalizados, optimización de rendimiento y testing.",
    status: "completed",
    color: "orange",
  },
];

export default function EducationTimeline() {
  const { theme } = useTheme();
  return (
    <section className={`studies ${theme}`}>
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
                              study.status === "completed"
                                ? "completed"
                                : "inProgress"
                            }`}
                          >
                            {study.status === "completed"
                              ? "Completado"
                              : "En curso"}
                          </span>
                        </div>
                        <h3 className={"degree"}>{study.degree}</h3>
                        <p className={`${"institution"}`}>
                          {study.institution}
                        </p>
                        <p className={"field"}>{study.field}</p>
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
                      <p className={"description"}>{study.description}</p>
                    )}
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
