import p1 from "../assets/portafolio/uno.webp";
import p1_1 from "../assets/portafolio/proyecto_1.1.webp";
import p1_2 from "../assets/portafolio/proyecto_1.2.webp";
import p1_3 from "../assets/portafolio/proyecto_1.3.webp";
import p1_4 from "../assets/portafolio/proyecto_1.4.webp";
import p1_5 from "../assets/portafolio/proyecto_1.5.webp";
import p1_6 from "../assets/portafolio/proyecto_1.6.webp";

import p2 from "../assets/portafolio/dos.webp";
import p2_1 from "../assets/portafolio/proyecto_2.1.webp";
import p2_2 from "../assets/portafolio/proyecto_2.2.webp";
import p2_3 from "../assets/portafolio/proyecto_2.3.webp";
import p2_4 from "../assets/portafolio/proyecto_2.4.webp";
import p2_5 from "../assets/portafolio/proyecto_2.5.webp";
import p2_6 from "../assets/portafolio/proyecto_2.6.webp";
import p2_7 from "../assets/portafolio/proyecto_2.7.webp";
import p2_8 from "../assets/portafolio/proyecto_2.8.webp";
import p2_9 from "../assets/portafolio/proyecto_2.9.webp";
import p2_10 from "../assets/portafolio/proyecto_2.10.webp";
import p2_11 from "../assets/portafolio/proyecto_2.11.webp";
import p2_12 from "../assets/portafolio/proyecto_2.12.webp";

import p3 from "../assets/portafolio/tres.webp";
import p3_1 from "../assets/portafolio/proyecto_3.1.webp";
import p3_2 from "../assets/portafolio/proyecto_3.2.webp";
import p3_3 from "../assets/portafolio/proyecto_3.3.webp";
import p3_4 from "../assets/portafolio/proyecto_3.4.webp";
import p3_5 from "../assets/portafolio/proyecto_3.5.webp";
import p3_6 from "../assets/portafolio/proyecto_3.6.webp";
import p3_7 from "../assets/portafolio/proyecto_3.7.webp";

import p4 from "../assets/portafolio/cuatro.webp";
import p4_1 from "../assets/portafolio/proyecto_4.1.webp";
import p4_2 from "../assets/portafolio/proyecto_4.2.webp";
import p4_3 from "../assets/portafolio/proyecto_4.3.webp";
import p4_4 from "../assets/portafolio/proyecto_4.4.webp";
import p4_5 from "../assets/portafolio/proyecto_4.5.webp";
import p4_6 from "../assets/portafolio/proyecto_4.6.webp";
import p4_7 from "../assets/portafolio/proyecto_4.7.webp";
import p4_8 from "../assets/portafolio/proyecto_4.8.webp";

//IMAGENES DE LAS SKILLS
import img1 from "../assets/skills/css3.webp";
import img2 from "../assets/skills/html.webp";
import img3 from "../assets/skills/javascript.webp";
import img4 from "../assets/skills/vuejs.webp";
import img5 from "../assets/skills/react.webp";
import img6 from "../assets/skills/nodejs.webp";
import img7 from "../assets/skills/mongodb.webp";
import img8 from "../assets/skills/mysql.webp";
import img9 from "../assets/skills/sqlserver.webp";
import img10 from "../assets/skills/git.webp";
import img11 from "../assets/skills/java.webp";
import img12 from "../assets/skills/python.webp";


export const proyectos = [
  {
    id: "1",
    img: p1,
    title: "FAZ - UJED",
    descriptionEs: [
      "Actualización del portal electrónico de la universidad, implementando nuevas tecnologías.",
      "Este proyecto se elaboró utilizando Vue como framework acompañado de Vuetify y Bootstrap, para el desarrollo se utilizaron archivos Json en los cuales se almacenó la información tanto de los estudiantes como los docentes.",
      "Las fases que se siguieron para la elaboración son las siguientes:",
      "1. Recopilación de datos.",
      "2. Planificación.",
      "3. Diseño.",
      "4. Desarrollo.",
      "5. Pruebas.",
    ],
    descriptionEn: [
      "Update of the electronic portal of the university, implementing new technologies.",
      "This project was developed using Vue as a framework accompanied by Vuetify and Bootstrap, for the development Json files were used in which the information of both students and teachers was stored.",
      "The phases followed for the elaboration are the following:",
      "1. Data Collection.",
      "2. Planning.",
      "3. Design.",
      "4. Development.",
      "5. Tests.",
    ],
    moreImg: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6],
    skills: [img1, img2, img3, img4],
  },
  {
    id: "2",
    img: p3,
    title: "FAZ Posgrado - UJED",
    descriptionEs: [
      "Actualización del portal electrónico de la universidad, implementando nuevas tecnologías.",
      "Este proyecto se elaboró utilizando Vue como framework acompañado de Vuetify y Bootstrap, para el desarrollo se utilizaron archivos json en los cuales se almacenó la información tanto de los estudiantes como los docentes.",
      "Las fases que se siguieron para la elaboración son las siguientes:",
      "1. Recopilación de datos.",
      "2. Planificación.",
      "3. Diseño.",
      "4. Desarrollo.",
      "5. Pruebas.",
    ],
    descriptionEn: [
      "Update of the electronic portal of the university, implementing new technologies.",
      "This project was developed using Vue as a framework accompanied by Vuetify and Bootstrap, for the development Json files were used in which the information of both students and teachers was stored.",
      "The phases followed for the elaboration are the following:",
      "1. Data Collection.",
      "2. Planning.",
      "3. Design.",
      "4. Development.",
      "5. Tests.",
    ],
    moreImg: [p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p3_7],
    skills: [img1, img2, img3, img4],
  },
  {
    id: "3",
    img: p2,
    title: "Kittenbook",
    descriptionEs: [
      "Software enfocado a la organización de los estudiantes, se puede añadir todo lo relacionado a alguna materia como, por ejemplo, créditos complementarios, notas, tareas, calificación.",
      "El proyecto utiliza MySQL como base de datos y React como framework principal.",
      "Las tecnologías que se usaron fue la pila MERN:",
      "- MySQL",
      "- Express",
      "- React",
      "- NodeJS",
    ],
    descriptionEn: [
      "Software focused on the organization of students, you can add everything related to a subject, such as complementary credits, grades, homework, grades.",
      "The project uses MySQL as the database and React as the main framework.",
      "The technologies that were used was the MERN stack:",
      "- MySQL",
      "- Express",
      "- React",
      "- NodeJS",
    ],
    moreImg: [
      p2_1,
      p2_2,
      p2_3,
      p2_4,
      p2_5,
      p2_6,
      p2_7,
      p2_8,
      p2_9,
      p2_10,
      p2_11,
      p2_12,
    ],
    skills: [img1, img2, img3, img5, img6, img8, img10],
  },
  {
    id: "4",
    img: p4,
    title: "Sistema",
    descriptionEs: [
      "Sistema de compra y venta de artículos, en el cual se tienen tres roles: administrador, vendedor y comprador. Cada rol tiene ciertas funcionalidades disponibles a excepción del administrador.",
      "El proyecto utiliza MongoDB como base de datos y Vue como framework principal",
      "Las tecnologías que se usaron fue la pila MEVN:",
      "- MongoDB",
      "- Express",
      "- Vue",
      "- NodeJS",
    ],
    descriptionEn: [
      "Item buying and selling system, in which there are three roles: administrator, seller and buyer. Each role has certain functionalities available with the exception of the administrator.",
      "The project uses MongoDB as the database and Vue as the main framework.",
      "The technologies that were used was the MEVN stack:",
      "- MongoDB",
      "- Express",
      "- Vue",
      "- NodeJS",
    ],
    moreImg: [p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7, p4_8],
    skills: [img1, img2, img3, img4, img6, img7],
  },
];
