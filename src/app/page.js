import About from "../../components/About/AboutMe";
import EducationGrid from "../../components/Education/EducationGrid";
import GithubInfo from "../../components/GithubInfo/GithubInfo";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <EducationGrid />
      <GithubInfo />
    </div>
  );
}
