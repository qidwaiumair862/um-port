import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/petrol-pump.jpg";
import ProjectImg2 from "../assets/projects/feedback-system.jpg";

const ProjectData = [
  {
    name: "Petrol Pump Management System",
    description:
      "A management system for handling petrol pump operations, fuel records, sales tracking, and customer management.",
    image: ProjectImg1,
    previewLink: "#",
  },
];

const ProjectData2 = [
  {
    name: "Feedback Management System",
    description:
      "A web-based feedback management system developed using PHP and MySQL for collecting, managing, and analyzing user feedback.",
    image: ProjectImg2,
    previewLink: "#",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;