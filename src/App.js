import "./App.css";
import Background from "./components/Background";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectContainer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Background />
      <NavBar />
      <div>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="projects">
          <ProjectsContainer />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
