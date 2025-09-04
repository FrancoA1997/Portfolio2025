import "../../scss/components/ui/TechBadge.scss";
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
  SiFigma,
} from "@icons-pack/react-simple-icons";

import {
  DimensionsIcon,
  CodeIcon,
  MixerVerticalIcon,
  Link1Icon,
  StackIcon,
  LightningBoltIcon,
  ReaderIcon,
  FilePlusIcon,
} from "@radix-ui/react-icons";
import { useLanguage } from "../../utils/language.context";
const TechBadge = ({ type }) => {
  const {language} = useLanguage()
  const badgeTypes = {
    fullstack: {
      text: "Fullstack Development",
      texto: "Desarrollo Fullstack",
      icon: <StackIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    landing: {
      text: "Landing page",
      texto: "Landing page",
      icon: <ReaderIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    multi: {
      text: "Multi page",
      texto: "Sitio multipágina",
      icon: <FilePlusIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    migration: {
      text: "Site Migration",
      texto: "Migración de sitio",
      icon: <MixerVerticalIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    design: {
      text: "Design",
      texto: "Diseño",
      icon: <DimensionsIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    frontend: {
      text: "Frontend Development",
      texto: "Desarrollo Frontend",
      icon: <CodeIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    backend: {
      text: "Backend Development",
      texto: "Desarrollo Backend",
      icon: <CodeIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    api: {
      text: "API Implementation",
      texto: "Implementación de API",
      icon: <Link1Icon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    optimization: {
      text: "seo/time Optimization",
      texto: "Optimización SEO/Tiempo",
      icon: <LightningBoltIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    react: {
      text: "React",
      texto: "React",
      icon: <SiReact style={{ color: "white", scale: 0.9 }} />,
      style: "badge react",
    },
    javascript: {
      text: "JavaScript",
      texto: "JavaScript",
      icon: <SiJavascript style={{ color: "white", scale: 0.9 }} />,
      style: "badge javascript",
    },
    scss: {
      text: "Scss",
      texto: "Scss",
      icon: <SiSass style={{ color: "white", scale: 0.9 }} />,
      style: "badge sass",
    },
    vite: {
      text: "Vite",
      texto: "Vite",
      icon: <SiVite style={{ color: "white", scale: 0.9 }} />,
      style: "badge vite",
    },
    typescript: {
      text: "TypeScript",
      texto: "TypeScript",
      icon: <SiTypescript style={{ color: "white", scale: 0.9 }} />,
      style: "badge typescript",
    },
    next: {
      text: "Next.js",
      texto: "Next.js",
      icon: <SiNextdotjs style={{ color: "white", scale: 0.9 }} />,
      style: "badge next",
    },
    material: {
      text: "Material UI",
      texto: "Material UI",
      icon: <SiMui style={{ color: "white", scale: 0.9 }} />,
      style: "badge material",
    },
    prisma: {
      text: "Prisma",
      texto: "Prisma",
      icon: <SiPrisma style={{ color: "white", scale: 0.9 }} />,
      style: "badge prisma",
    },
    mongo: {
      text: "MongoDB",
      texto: "MongoDB",
      icon: <SiMongodb style={{ color: "white", scale: 0.9 }} />,
      style: "badge mongo",
    },
    figma: {
      text: "Figma",
      texto: "Figma",
      icon: <SiFigma style={{ color: "white", scale: 0.9 }} />,
      style: "badge figma",
    },
  };
  return (
    <div className={badgeTypes[type]?.style}>
      <p className="badge-text">{language === 'en' ? badgeTypes[type]?.text : badgeTypes[type]?.texto}</p>
      {badgeTypes[type]?.icon}
    </div>
  );
};

export default TechBadge;
