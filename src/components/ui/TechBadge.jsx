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
  FilePlusIcon
} from "@radix-ui/react-icons";
const TechBadge = ({ type }) => {
  const badgeTypes = {
    fullstack: {
      text: "Fullstack Development",
      icon: <StackIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
        landing: {
      text: "Landing page",
      icon: <ReaderIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
       multi: {
      text: "Multi page",
      icon: <FilePlusIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
       migration: {
      text: "Site Migration",
      icon: <MixerVerticalIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    design: {
      text: "Design",
      icon: <DimensionsIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    frontend: {
      text: "Frontend Development",
      icon: <CodeIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
        backend: {
      text: "Backend Development",
      icon: <CodeIcon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    api: {
      text: "API Implementation",
      icon: <Link1Icon className="badge-icon " />,
      style: "non-tech-badge badge",
    },
    optimization: {
      text: "seo/time Optimization",
      icon: <LightningBoltIcon className="badge-icon" />,
      style: "non-tech-badge badge",
    },
    react: {
      text: "React",
      icon: <SiReact style={{ color: "white", scale: 0.9 }} />,
      style: "badge react",
    },
    javascript: {
      text: "JavaScript",
      icon: <SiJavascript style={{ color: "white", scale: 0.9 }} />,
      style: "badge javascript",
    },
    scss: {
      text: "Scss",
      icon: <SiSass style={{ color: "white", scale: 0.9 }} />,
      style: "badge sass",
    },
    vite: {
      text: "Vite",
      icon: <SiVite style={{ color: "white", scale: 0.9 }} />,
      style: "badge vite",
    },
    typescript: {
      text: "TypeScript",
      icon: <SiTypescript style={{ color: "white", scale: 0.9 }} />,
      style: "badge typescript",
    },
    next: {
      text: "Next.js",
      icon: <SiNextdotjs style={{ color: "white", scale: 0.9 }} />,
      style: "badge next",
    },
    material: {
      text: "Material UI",
      icon: <SiMui style={{ color: "white", scale: 0.9 }} />,
      style: "badge material",
    },
    prisma: {
      text: "Prisma",
      icon: <SiPrisma style={{ color: "white", scale: 0.9 }} />,
      style: "badge prisma",
    },
    mongo: {
      text: "MongoDB",
      icon: <SiMongodb style={{ color: "white", scale: 0.9 }} />,
      style: "badge mongo",
    },
    figma: {
      text: "Figma",
      icon: <SiFigma style={{ color: "white", scale: 0.9 }} />,
      style: "badge figma",
    },
  };
  return (
    <div className={badgeTypes[type]?.style}>
      <p className="badge-text">{badgeTypes[type]?.text}</p>
      {badgeTypes[type]?.icon}
    </div>
  );
};

export default TechBadge;
