import About from "../../components/About/AboutMe";
import Contact from "../../components/Contact/Contact";
import EducationGrid from "../../components/Education/EducationGrid";
import GithubInfo from "../../components/GithubInfo/GithubInfo";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationGrid />
      <GithubInfo />
      <Contact />
    </div>
  );
}
