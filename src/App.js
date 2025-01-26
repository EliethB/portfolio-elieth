import './App.css';
import Background from './components/Background';
import About from './components/About';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import ProjectsContainer from './components/ProjectContainer';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Background /> {/* Esto será el fondo de todas las secciones */}
      <NavBar />
      <div style={{ paddingTop: '60px' }}>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectsContainer />
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
