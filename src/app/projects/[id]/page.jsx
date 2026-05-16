import ProjectDetailsPage from "../../../../components/Projects/ProjectDetailsPage";

async function ProjectDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/projects.json`);
  const data = await res.json();

  const project = data.find((project) => project.id === id);
  console.log("Fetched Project:", project);

  return (
    <div>
      <ProjectDetailsPage project={project} />
    </div>
  );
}

export default ProjectDetails;
