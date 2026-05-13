import About from "../../components/About/AboutMe";
import Contact from "../../components/Contact/Contact";
import EducationGrid from "../../components/Education/EducationGrid";
import GithubInfo from "../../components/GithubInfo/GithubInfo";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";


export const metadata = {
  title: "Mehedi Hasan | MERN Stack Web Developer",
  description:
    "Welcome to Mehedi Hasan's portfolio. I'm a MERN Stack Developer specializing in building modern, responsive web applications with React, Next.js, and Node.js.",
  openGraph: {
    title: "Mehedi Hasan | MERN Stack Web Developer Portfolio",
    description:
      "Explore my portfolio showcasing web development projects, skills, and experience in MERN stack technologies.",
    url: "https://mehedihasan.dev",
    images: [
      {
        url: "/home-og.png",
        width: 1200,
        height: 630,
        alt: "Mehedi Hasan Portfolio Homepage",
      },
    ],
  },
};


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
