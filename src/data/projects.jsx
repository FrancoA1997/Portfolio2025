///---------------------Real Projects---------------------------/////
import destiny from "/images/destiny.png";
import lexlogos from "/images/lexlogos.png";
import solmedicam from "/images/solmedicam.png";
import frutales from "/images/frutales.png";
import vivero from "/images/vivero.png";
import nico from "/images/nico.png";

///---------------------Templates---------------------------/////

import architect from "/images/architect.png";
import construction from "/images/construction.png";
import medical from "/images/medical.png";
import psichologist from "/images/psichologist.png";
import lawyer from "/images/lawyer.png";
import hotel from "/images/hotel.png";

export const projects = [
  {
    id: 1,
    title: "Destiny Website",
    titulo: "Sitio Web - Destiny",

    description: (
      <p>
        I designed and built the website for a software factory company. <br />
        <br />
        My core focus was on creating a seamless, high-performance user
        experience, ensuring the site was fully responsive and optimized for
        search engines, making it a powerful tool for the company's digital
        presence.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Frontend Development:</strong> Built the website from the ground
        up using React.
      </p>,
      <p>
        <strong>Responsive Design and Adaptability:</strong> Ensured the user
        interface looked and functioned perfectly across all devices, from
        mobile phones to desktops.
      </p>,
      <p>
        <strong>Performance Optimization and SEO:</strong> Improved site loading
        speeds and visibility on search engines.
      </p>,
      <p>
        <strong>API Integration:</strong> Connected the frontend to the API to
        pull in dynamic content across the entire site.
      </p>,
      <p>
        <strong>Admin Panel Creation:</strong> Developed an internal tool that
        allows the company's team to independently manage blog posts and users.
      </p>,
    ],
    descripcion: (
      <p>
        Diseñé y desarrollé la página web para una fábrica de software.
        <br />
        <br />
        Mi enfoque principal fue crear una experiencia de usuario fluida y de
        alto rendimiento, asegurándome de que el sitio fuera completamente
        responsive y estuviera optimizado para los motores de búsqueda, lo que
        lo convirtió en una poderosa herramienta para la presencia digital de la
        empresa.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo Frontend:</strong> Creación del sitio web desde cero
        utilizando React.
      </p>,
      <p>
        <strong>Diseño Responsive y Adaptabilidad:</strong> Aseguré que la
        interfaz de usuario se viera y funcionara perfectamente en cualquier
        dispositivo, desde móviles hasta ordenadores de escritorio.
      </p>,
      <p>
        <strong>Optimización del rendimiento y SEO:</strong> Mejoré la velocidad
        de carga y la visibilidad en los motores de búsqueda.
      </p>,
      <p>
        <strong>Integración con API:</strong> Conecté el frontend con la API
        para cargar contenido dinámico en todo el sitio.
      </p>,
      <p>
        <strong>Creación de un Panel de Administración:</strong> Desarrollé una
        herramienta interna que permite al equipo de la empresa gestionar de
        forma autónoma las publicaciones del blog y los usuarios.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "api", "optimization"],
    thumbnail: destiny,
    url: "https://destinyti.com/",
  },
  {
    id: 2,
    title: "Lexlogos Website",
    titulo: "Sitio Web - Lexlogos",

    description: (
      <p>
        I led the complete migration of a company's website from WordPress to
        Next.js, while preserving the original design, but with key visual
        enhancements and the creation of new components. <br />
        <br />
        My main focus was on modernizing the site's architecture, improving its
        performance, and optimizing its online visibility, all while providing
        the team with a more robust and efficient administration tool.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Website Migration:</strong> Complete transition of the site from
        WordPress to Next.js, maintaining brand identity but improving
        functionality.
      </p>,
      <p>
        <strong>Custom Component Development:</strong> Designed and built a
        testimonial component and a brand carousel from scratch.
      </p>,
      <p>
        <strong>API Development and Optimization:</strong> Created a custom API
        to handle the contact form and dynamic content management.
      </p>,
      <p>
        <strong>Admin Panel Creation:</strong> Developed an admin panel to
        autonomously manage contact form messages, testimonials, and carousel
        brands, as well as user management for the site.
      </p>,
      <p>
        <strong>Performance and SEO Optimization:</strong> Improved site loading
        times and optimized performance to enhance search engine rankings.
      </p>,
    ],
    descripcion: (
      <p>
        Dirigí la migración total del sitio web de una empresa, de WordPress a
        Next.js, manteniendo el diseño original, pero con mejoras visuales clave
        y la creación de nuevos componentes. <br />
        <br />
        Mi trabajo principal se centró en modernizar la arquitectura del sitio,
        mejorar su rendimiento y optimizar su visibilidad en línea, al mismo
        tiempo que brindé al equipo una herramienta de administración más
        robusta y eficiente.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Migración del sitio web:</strong> Transición completa del sitio
        de WordPress a Next.js manteniendo la identidad de marca, pero mejorando
        la funcionalidad.
      </p>,
      <p>
        <strong>Desarrollo de componentes personalizados:</strong> Diseño y
        creación de un componente de testimonios y un carrusel de marcas desde
        cero.
      </p>,
      <p>
        <strong>Desarrollo y optimización de la API:</strong> Creé una API
        personalizada para manejar el formulario de contacto y la gestión de
        contenido dinámico.
      </p>,
      <p>
        <strong>Creación de un Panel de Administración:</strong> Desarrollé un
        panel de administración para gestionar de forma autónoma los mensajes
        del formulario de contacto, los testimonios y las marcas del carrusel,
        así como la gestión de usuarios del sitio.
      </p>,
      <p>
        <strong>Optimización de rendimiento y SEO:</strong> Mejoré los tiempos
        de carga del sitio y optimicé su rendimiento para mejorar el
        posicionamiento en buscadores.
      </p>,
    ],

    stack: [
      "react",
      "next",
      "scss",
      "material",
      "javascript",
      "mongo",
      "prisma",
    ],
    core: ["fullstack", "migration", "api", "optimization"],
    thumbnail: lexlogos,
    url: "https://www.lexlogos.com/",
  },
  {
    id: 3,
    title: "Solmedicam Website",
    titulo: "Sitio Web - Solmedicam",

    descripcion: (
      <p>
        Como parte de un equipo de desarrollo, fui responsable del desarrollo
        frontend de una aplicación web. Mi rol consistió en traducir los diseños
        de Figma en componentes web funcionales y dinámicos, implementando la
        API para asegurar la correcta visualización de la información. <br />
        <br /> Además, me enfoqué en la optimización del rendimiento y la
        visibilidad en buscadores para mejorar la experiencia del usuario.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo Frontend:</strong> Creé la aplicación web desde cero,
        traduciendo fielmente los diseños del equipo de diseño de Destiny.
      </p>,
      <p>
        <strong>Implementación de la API:</strong> Conecté el frontend a la API
        del desarrollador backend para integrar el contenido y la funcionalidad
        de la aplicación.
      </p>,
      <p>
        <strong>Optimización de Rendimiento y SEO:</strong> Mejoré los tiempos
        de carga y la visibilidad en motores de búsqueda.
      </p>,
      <p>
        <strong>Integración de OpenGraph:</strong> Implementé OpenGraph para
        mejorar la apariencia de los enlaces del sitio al ser compartidos en
        redes sociales, asegurando que se visualicen correctamente con una
        imagen, título y descripción atractivos.
      </p>,
    ],
    description: (
      <p>
        As part of a development team, I was responsible for the frontend
        development of a web application. My role involved translating Figma
        designs into functional and dynamic web components, implementing the API
        to ensure proper data display. <br />
        <br />
        Additionally, I focused on performance optimization and search engine
        visibility to enhance the user experience.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Frontend Development:</strong> Built the web application from
        scratch, faithfully translating the designs from Destiny's design team.
      </p>,
      <p>
        <strong>API Implementation:</strong> Connected the frontend to the
        backend developer's API to integrate content and application
        functionality.
      </p>,
      <p>
        <strong>Performance and SEO Optimization:</strong> Improved loading
        times and enhanced search engine visibility.
      </p>,
      <p>
        <strong>OpenGraph Integration:</strong> Implemented OpenGraph to improve
        the appearance of site links when shared on social media, ensuring they
        display with an engaging image, title, and description.
      </p>,
    ],

    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["frontend", "api", "optimization"],
    thumbnail: solmedicam,
    url: "https://solmedicam.com/",
  },
  {
    id: 12,
    title: "Nico Marban Trainer Website",
    titulo: "Sitio Web - Nico Marban Trainer",

    description: (
      <p>
        I designed and built the website for a personal trainer. <br />
        <br />
        My core focus was on creating a seamless, high-performance user
        experience, ensuring the site was fully responsive and optimized for
        search engines, making it a powerful tool for the company's digital
        presence.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Frontend Development:</strong> Built the website from the ground
        up using React.
      </p>,
      <p>
        <strong>Responsive Design and Adaptability:</strong> Ensured the user
        interface looked and functioned perfectly across all devices, from
        mobile phones to desktops.
      </p>,
      <p>
        <strong>Performance Optimization and SEO:</strong> Improved site loading
        speeds and visibility on search engines.
      </p>,
      <p>
        Present the training plans with an attractive design, using impactful
        images or short videos that show the results.
      </p>,
      <p>
        Highlight how the app optimizes user interaction and offers exclusive
        tools that drive conversion.
      </p>,
    ],
    descripcion: (
      <p>
        Diseñé y desarrollé la página web para una fábrica de software.
        <br />
        <br />
        Mi enfoque principal fue crear una experiencia de usuario fluida y de
        alto rendimiento, asegurándome de que el sitio fuera completamente
        responsive y estuviera optimizado para los motores de búsqueda, lo que
        lo convirtió en una poderosa herramienta para la presencia digital de la
        empresa.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo Frontend:</strong> Creación del sitio web desde cero
        utilizando React.
      </p>,
      <p>
        <strong>Diseño Responsive y Adaptabilidad:</strong> Aseguré que la
        interfaz de usuario se viera y funcionara perfectamente en cualquier
        dispositivo, desde móviles hasta ordenadores de escritorio.
      </p>,
      <p>
        <strong>Optimización del rendimiento y SEO:</strong> Mejoré la velocidad
        de carga y la visibilidad en los motores de búsqueda.
      </p>,
      <p>
        Presentar los planes de entrenamiento con un diseño atractivo,
        utilizando imágenes impactantes o videos cortos que muestren los
        resultados.
      </p>,
      <p>
        Resaltar cómo la aplicación optimiza la interacción del usuario y ofrece
        herramientas exclusivas que impulsan la conversión.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization"],
    thumbnail: nico,
    url: "https://www.nicomarban.com/",
  },
  {
    id: 4,
    title: "Frutales Website",
    titulo: "Sitio Web - Frutales",
    descripcion: (
      <p>
        Como parte de un equipo de desarrollo, fui responsable del desarrollo
        frontend de una aplicación web. Mi rol consistió en traducir los diseños
        de Figma en componentes web funcionales.
        <br />
        <br />
        Además, me enfoqué en la optimización del rendimiento y la visibilidad
        en buscadores para mejorar la experiencia del usuario.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo Frontend:</strong> Creé la aplicación web desde cero,
        traduciendo fielmente los diseños del equipo de diseño de Destiny.
      </p>,
      <p>
        <strong>Optimización de Rendimiento y SEO:</strong> Mejoré los tiempos
        de carga y la visibilidad en motores de búsqueda.
      </p>,
    ],
    description: (
      <p>
        As part of a development team, I was responsible for the frontend
        development of a web application. My role involved translating Figma
        designs into functional and dynamic web components.
        <br />
        <br /> Additionally, I focused on performance optimization and search
        engine visibility to enhance the user experience.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Frontend Development:</strong> Built the web application from
        scratch, faithfully translating the designs from Destiny's design team.
      </p>,
      <p>
        <strong>Performance and SEO Optimization:</strong> Improved loading
        times and enhanced search engine visibility.
      </p>,
    ],

    stack: ["react", "vite", "scss", "material", "javascript"],
    core: ["frontend", "api", "optimization"],
    thumbnail: frutales,
    url: "https://frutales.com.ar/",
  },
  {
    id: 5,
    title: "Vivero Santa Isabel Website",
    titulo: "Sitio Web - Vivero Santa Isabel",
    descripcion: (
      <p>
        Como parte de un equipo de desarrollo, fui responsable del desarrollo
        frontend de una aplicación web. Mi rol consistió en traducir los diseños
        de Figma en componentes web funcionales. <br />
        <br />
        Para esta web, trabajé en la optimización de tiempos de carga, así como
        en la re-estructuración del layout total para mejorar el responsive y la
        visibilidad en mobile. También optimicé los llamados a la API para
        mejorar el tiempo que tardaba la hidratación de la web y rediseñé varias
        secciones para una mejor disposición de la información.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Optimización de Tiempos de Carga:</strong> Implementé técnicas
        para reducir el tiempo de carga inicial de la aplicación web.
      </p>,
      <p>
        <strong>Re-estructuración del Layout para Responsive:</strong> Modifiqué
        la estructura visual de la web para asegurar una correcta visualización
        y usabilidad en dispositivos móviles.
      </p>,
      <p>
        <strong>Optimización de Llamados a la API:</strong> Ajusté las
        peticiones a la API para disminuir el tiempo de hidratación de la
        información en la web.
      </p>,
      <p>
        <strong>Rediseño de Secciones:</strong> Reorganicé la disposición de la
        información en diversas secciones para mejorar la experiencia del
        usuario.
      </p>,
    ],
    description: (
      <p>
        As part of a development team, I was responsible for the frontend
        development of a web application. My role involved translating Figma
        designs into functional and dynamic web components. <br />
        <br /> For this website, I worked on optimizing loading times, as well
        as restructuring the entire layout to improve responsiveness and
        visibility on mobile devices. I also optimized API calls to improve the
        time it took for the website to hydrate. Additionally, I redesigned
        several sections for better information layout.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Loading Time Optimization:</strong> Implemented techniques to
        reduce the initial loading time of the web application.
      </p>,
      <p>
        <strong>Layout Restructuring for Responsiveness:</strong> Modified the
        visual structure of the website to ensure correct display and usability
        on mobile devices.
      </p>,
      <p>
        <strong>API Call Optimization:</strong> Adjusted API requests to
        decrease the time it took for the website to hydrate information.
      </p>,
      <p>
        <strong>Section Redesign:</strong> Reorganized the information layout in
        various sections to enhance the user experience.
      </p>,
    ],
    stack: ["react", "scss", "material", "javascript"],
    core: ["frontend", "optimization"],
    thumbnail: vivero,
    url: "https://viverosantaisabel.com/",
  },
];

// -----------------------------------TEMPLATES -------------------------------------------//
export const templates = [
  {
    id: 6,
    title: "Architect Template",
    titulo: "Plantilla Arquitectura",

    descripcion: (
      <p>
        Diseñé y desarrollé una plantilla web para arquitectos independientes,
        brindándoles una solución visualmente atractiva y fácil de usar para
        exhibir sus proyectos. <br />
        <br />
        La plantilla, creada con React, está pensada para ser flexible y
        adaptable a las necesidades de cada cliente, asegurando un proceso de
        personalización ágil y eficiente.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Diseño y Desarrollo de la Plantilla:</strong> Creé el diseño y
        la estructura de la plantilla desde cero, enfocada en las necesidades de
        arquitectos y diseñadores.
      </p>,
      <p>
        <strong>Desarrollo en React:</strong> Construí una base sólida y modular
        para asegurar la flexibilidad y la capacidad de adaptación.
      </p>,
      <p>
        <strong>Optimización y Personalización:</strong> Optimicé la plantilla
        para un rendimiento superior y la preparé para ser fácilmente
        personalizable para futuros clientes.
      </p>,
      <p>
        <strong>Soporte y Mantenimiento:</strong> La plantilla está lista para
        ser implementada, brindando a los clientes una plataforma profesional y
        moderna para sus portafolios.
      </p>,
      <p>
        <strong>Funcionalidad Multilenguaje:</strong> Implementé la capacidad de
        configurar múltiples idiomas, con inglés y español como los
        predeterminados.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a website template for independent architects,
        providing them with a visually appealing and user-friendly solution to
        showcase their work. <br />
        <br />
        The template, built with React, is designed to be flexible and adaptable
        to each client's specific needs, ensuring a smooth and efficient
        customization process.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Template Design and Development:</strong> I created the design
        and structure of the template from the ground up, with a focus on the
        needs of architects and designers.
      </p>,
      <p>
        <strong>React Development:</strong> Built a solid, modular foundation to
        ensure flexibility and adaptability.
      </p>,
      <p>
        <strong>Optimization and Customization:</strong> Optimized the template
        for superior performance and prepared it to be easily customizable for
        future clients.
      </p>,
      <p>
        <strong>Support and Maintenance:</strong> The template is ready to be
        implemented, offering clients a professional and modern platform for
        their portfolios.
      </p>,
      <p>
        <strong>Multilanguage Functionality:</strong> Implemented the ability to
        configure multiple languages, with English and Spanish as the defaults.
      </p>,
    ],

    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "landing"],
    thumbnail: architect,
    url: "https://construction1.destinyti.com/",
  },
  {
    id: 7,
    title: "Construction Template",
    titulo: "Plantilla Constructora",

    descripcion: (
      <p>
        Diseñé y desarrollé un sitio web multi-pagina para empresas de
        construcción. La plataforma se centró en ofrecer una presencia digital
        completa, incluyendo secciones clave como la historia de la empresa, una
        galería de proyectos, y páginas de contacto. <br />
        <br />
        Mi objetivo fue crear una web robusta y visualmente impactante, que
        ayudara a la empresa a mostrar su profesionalismo y la calidad de su
        trabajo de manera efectiva.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo del Sitio Web Multipage:</strong> Construí un sitio
        web multipágina desde cero, asegurando una navegación intuitiva entre
        las distintas secciones.
      </p>,
      <p>
        <strong>Creación de Páginas Clave:</strong> Desarrollé páginas dedicadas
        a la historia de la empresa, una sección para todos los proyectos, una
        galería fotográfica y una página de contacto funcional.
      </p>,
      <p>
        <strong>Diseño y Experiencia de Usuario:</strong> Me encargué de que el
        diseño fuera atractivo y profesional, reflejando la solidez de una
        empresa de construcción.
      </p>,
      <p>
        <strong>Optimización del Rendimiento:</strong> Mejoré los tiempos de
        carga y la eficiencia del sitio para ofrecer una experiencia de usuario
        fluida.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a multipage website for construction companies.
        The platform focused on providing a comprehensive digital presence,
        including key sections such as the company's history, a projects
        gallery, and contact pages. <br />
        <br />
        My goal was to create a robust and visually impactful website that
        effectively helped the company showcase its professionalism and the
        quality of its work.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Multipage Website Development:</strong> Built a multipage
        website from scratch, ensuring intuitive navigation between the
        different sections.
      </p>,
      <p>
        <strong>Creation of Key Pages:</strong> Developed dedicated pages for
        the company's history, a section for all projects, a photo gallery, and
        a functional contact page.
      </p>,
      <p>
        <strong>Design and User Experience:</strong> Ensured the design was
        appealing and professional, reflecting the solidity of a construction
        company.
      </p>,
      <p>
        <strong>Performance Optimization:</strong> Improved the site's loading
        times and efficiency to provide a smooth user experience.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "multi"],
    thumbnail: construction,
    url: "https://construction2.destinyti.com/",
  },
  {
    id: 8,
    title: "Psychologist Template",
    titulo: "Plantilla Psicologos",

    descripcion: (
      <p>
        Diseñé y desarrollé una plantilla web para psicólogos, brindándoles una
        solución visualmente atractiva y fácil de usar para mostrar sus
        servicios y atraer nuevos pacientes. <br />
        <br />
        La plantilla, creada con React, está pensada para ser flexible y
        adaptable a las necesidades de cada cliente, asegurando un proceso de
        personalización ágil y eficiente para establecer su presencia en línea.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Diseño y Desarrollo de la Plantilla:</strong> Creé el diseño y
        la estructura de la plantilla desde cero, enfocada en las necesidades de
        los profesionales de la psicología.
      </p>,
      <p>
        <strong>Desarrollo en React:</strong> Construí una base sólida y modular
        para asegurar la flexibilidad y la capacidad de adaptación.
      </p>,
      <p>
        <strong>Optimización y Personalización:</strong> Optimicé la plantilla
        para un rendimiento superior y la preparé para ser fácilmente
        personalizable para futuros clientes.
      </p>,
      <p>
        <strong>Soporte y Mantenimiento:</strong> La plantilla está lista para
        ser implementada, brindando a los psicólogos una plataforma profesional
        y moderna para sus prácticas.
      </p>,
      <p>
        <strong>Funcionalidad Multilenguaje:</strong> Implementé la capacidad de
        configurar múltiples idiomas, con inglés y español como los
        predeterminados.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a website template for psychologists, providing
        them with a visually appealing and user-friendly solution to showcase
        their services and attract new patients. <br />
        <br />
        The template, built with React, is designed to be flexible and adaptable
        to each client's specific needs, ensuring a smooth and efficient
        customization process to establish their online presence.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Template Design and Development:</strong> I created the design
        and structure of the template from the ground up, with a focus on the
        needs of psychology professionals.
      </p>,
      <p>
        <strong>React Development:</strong> Built a solid, modular foundation to
        ensure flexibility and adaptability.
      </p>,
      <p>
        <strong>Optimization and Customization:</strong> Optimized the template
        for superior performance and prepared it to be easily customizable for
        future clients.
      </p>,
      <p>
        <strong>Support and Maintenance:</strong> The template is ready to be
        implemented, offering psychologists a professional and modern platform
        for their practices.
      </p>,
      <p>
        <strong>Multilanguage Functionality:</strong> Implemented the ability to
        configure multiple languages, with English and Spanish as the defaults.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "landing"],
    thumbnail: psichologist,
    url: "https://psicologist.destinyti.com/",
  },
  {
    id: 9,
    title: "Medical Template",
    titulo: "Plantilla Medicos",

    descripcion: (
      <p>
        Diseñé y desarrollé una plantilla web para médicos, brindándoles una
        plataforma profesional y confiable para presentar sus servicios y
        especialidades. <br />
        <br />
        La plantilla, construida con React, se enfoca en ser flexible y
        adaptable a las necesidades de cada consultorio o clínica, permitiendo
        un proceso de personalización ágil para establecer una presencia digital
        sólida y accesible.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Diseño y Desarrollo de la Plantilla:</strong> Creé el diseño y
        la estructura de la plantilla desde cero, enfocada en las necesidades de
        los profesionales de la salud.
      </p>,
      <p>
        <strong>Desarrollo en React:</strong> Construí una base sólida y modular
        para asegurar la flexibilidad y la capacidad de adaptación a distintos
        perfiles médicos.
      </p>,
      <p>
        <strong>Optimización y Personalización:</strong> Optimicé la plantilla
        para un rendimiento superior y la preparé para ser fácilmente
        personalizable por futuros clientes.
      </p>,
      <p>
        <strong>Soporte y Mantenimiento:</strong> La plantilla está lista para
        ser implementada, ofreciendo a los médicos una plataforma moderna y
        profesional para sus prácticas.
      </p>,
      <p>
        <strong>Funcionalidad Multilenguaje:</strong> Implementé la capacidad de
        configurar múltiples idiomas, con inglés y español como los
        predeterminados.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a website template for doctors, providing them
        with a professional and trustworthy platform to present their services
        and specialties. <br />
        <br />
        The template, built with React, is designed to be flexible and adaptable
        to the needs of each practice or clinic, allowing for a swift
        customization process to establish a solid and accessible digital
        presence.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Template Design and Development:</strong> I created the design
        and structure of the template from the ground up, with a focus on the
        needs of health professionals.
      </p>,
      <p>
        <strong>React Development:</strong> Built a solid, modular foundation to
        ensure flexibility and adaptability to different medical profiles.
      </p>,
      <p>
        <strong>Optimization and Customization:</strong> Optimized the template
        for superior performance and prepared it to be easily customizable for
        future clients.
      </p>,
      <p>
        <strong>Support and Maintenance:</strong> The template is ready to be
        implemented, offering doctors a modern and professional platform for
        their practices.
      </p>,
      <p>
        <strong>Multilanguage Functionality:</strong> Implemented the ability to
        configure multiple languages, with English and Spanish as the defaults.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "landing"],
    thumbnail: medical,
    url: "https://medical1.destinyti.com/",
  },
  {
    id: 10,
    title: "Lawyer Template",
    titulo: "Plantilla Abogados",

    descripcion: (
      <p>
        Diseñé y desarrollé una plantilla web para abogados, proporcionándoles
        una plataforma elegante y confiable para mostrar sus servicios y su área
        de especialización. <br />
        <br /> La plantilla, construida con React, se enfoca en ser flexible y
        adaptable a las necesidades de cada firma, permitiendo un proceso de
        personalización ágil y eficiente para establecer una presencia digital
        profesional y sólida.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Diseño y Desarrollo de la Plantilla:</strong> Creé el diseño y
        la estructura de la plantilla desde cero, enfocada en la estética y
        necesidades de los profesionales del derecho.
      </p>,
      <p>
        <strong>Desarrollo en React:</strong> Construí una base sólida y modular
        para asegurar la flexibilidad y la capacidad de adaptación a distintos
        perfiles de abogados.
      </p>,
      <p>
        <strong>Optimización y Personalización:</strong> Optimicé la plantilla
        para un rendimiento superior y la preparé para ser fácilmente
        personalizable por futuros clientes.
      </p>,
      <p>
        <strong>Soporte y Mantenimiento:</strong> La plantilla está lista para
        ser implementada, brindando a los abogados una plataforma moderna y
        profesional para sus servicios.
      </p>,
      <p>
        <strong>Funcionalidad Multilenguaje:</strong> Implementé la capacidad de
        configurar múltiples idiomas, con inglés y español como los
        predeterminados.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a website template for lawyers, providing them
        with an elegant and trustworthy platform to showcase their services and
        areas of expertise. <br />
        <br />
        The template, built with React, is designed to be flexible and adaptable
        to the needs of each law firm, allowing for a swift and efficient
        customization process to establish a professional and solid digital
        presence.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Template Design and Development:</strong> I created the design
        and structure of the template from the ground up, with a focus on the
        aesthetics and needs of legal professionals.
      </p>,
      <p>
        <strong>React Development:</strong> Built a solid, modular foundation to
        ensure flexibility and adaptability to different lawyer profiles.
      </p>,
      <p>
        <strong>Optimization and Customization:</strong> Optimized the template
        for superior performance and prepared it to be easily customizable for
        future clients.
      </p>,
      <p>
        <strong>Support and Maintenance:</strong> The template is ready to be
        implemented, offering lawyers a modern and professional platform for
        their services.
      </p>,
      <p>
        <strong>Multilanguage Functionality:</strong> Implemented the ability to
        configure multiple languages, with English and Spanish as the defaults.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "landing"],
    thumbnail: lawyer,
    url: "https://lawyer1.destinyti.com/",
  },
  {
    id: 11,
    title: "Hotel Template",
    titulo: "Plantilla Hoteleria",
    descripcion: (
      <p>
        Diseñé y desarrollé un sitio web multi pagina para hoteles, ofreciendo
        una plataforma visualmente atractiva y fácil de usar para destacar las
        instalaciones y servicios. <br />
        <br />
        La plantilla, construida con React, se enfoca en ser flexible y
        adaptable a la marca de cada establecimiento, garantizando una presencia
        digital elegante y funcional para atraer a más huéspedes.
      </p>
    ),
    responsabilidades: [
      <p>
        <strong>Desarrollo del Sitio Web:</strong> Construí un sitio web
        multipágina desde cero, con secciones dedicadas para destacar las
        características del hotel, como el Spa, salones de eventos y el
        restaurante.
      </p>,
      <p>
        <strong>Diseño y Desarrollo de la Plantilla:</strong> Creé el diseño y
        la estructura de la plantilla enfocada en las necesidades de hoteles y
        alojamientos.
      </p>,
      <p>
        <strong>Desarrollo en React:</strong> Construí una base sólida y modular
        para asegurar la flexibilidad y la capacidad de adaptación.
      </p>,
      <p>
        <strong>Integración con Motores de Reserva:</strong> Implementé la
        capacidad de conectar motores de reserva de terceros, permitiendo a los
        huéspedes reservar directamente desde el sitio web.
      </p>,
      <p>
        <strong>Galería de Imágenes con Filtros:</strong> Desarrollé una galería
        de imágenes completa donde los usuarios pueden filtrar las fotos por
        diferentes secciones del hotel.
      </p>,
      <p>
        <strong>Optimización y Personalización:</strong> Optimicé la plantilla
        para un rendimiento superior y la preparé para ser fácilmente
        personalizable por futuros clientes.
      </p>,
      <p>
        <strong>Funcionalidad Multilenguaje:</strong> Implementé la capacidad de
        configurar múltiples idiomas, con inglés y español como los
        predeterminados.
      </p>,
    ],
    description: (
      <p>
        I designed and developed a multipage website for hotels, offering a
        visually appealing and user-friendly platform to highlight facilities
        and services. <br />
        <br />
        The template, built with React, is focused on being flexible and
        adaptable to each establishment's brand, ensuring an elegant and
        functional digital presence to attract more guests.
      </p>
    ),
    responsabilities: [
      <p>
        <strong>Multipage Website Development:</strong> Built a multipage
        website from the ground up, with dedicated sections to highlight hotel
        features like the Spa, event halls, and restaurant.
      </p>,
      <p>
        <strong>Template Design and Development:</strong> I created the design
        and structure of the template with a focus on the needs of hotels and
        accommodations.
      </p>,
      <p>
        <strong>React Development:</strong> Built a solid, modular foundation to
        ensure flexibility and adaptability.
      </p>,
      <p>
        <strong>Third-Party Booking Engine Integration:</strong> Implemented the
        ability to connect third-party booking engines, allowing guests to
        reserve directly from the website.
      </p>,
      <p>
        <strong>Image Gallery with Filters:</strong> Developed a complete image
        gallery where users can filter photos by different sections of the
        hotel.
      </p>,
      <p>
        <strong>Optimization and Customization:</strong> Optimized the template
        for superior performance and prepared it to be easily customizable for
        future clients.
      </p>,
      <p>
        <strong>Multilanguage Functionality:</strong> Implemented the ability to
        configure multiple languages, with English and Spanish as the defaults.
      </p>,
    ],
    stack: ["react", "vite", "scss", "material", "figma", "javascript"],
    core: ["design", "frontend", "optimization", "multi"],
    thumbnail: hotel,
    url: "https://hotel1.destinyti.com/",
  },
];
