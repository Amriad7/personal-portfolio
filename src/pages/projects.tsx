import ProjectCard from "@/components/project-card";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";

const Projects = () => {
  const project = {
    title: "Personal Portfolio Website",
    description:
      " A modern portfolio site to showcase my skills, experience, and projects. It includes a fully integrated blog where I write about web development and tech topics.",
    features: [
      "Admin dashboard for managing content",
      "Role-based access with authentication",
      "Responsive design with theme toggle",
      "Integrated blog with rich text editor",
    ],
    stack: ["React", "Shadcn", "Tailwind", "Node", "Express"],
  };

  return (
    <div className="relative">
      <div className="hero-gradient absolute top-0 left-0 w-full h-screen z-0"></div>
      <section className="py-[100px] sm:py-[150px] m-auto px-6 max-w-5xl relative z-10 space-y-12 sm:space-y-24">
        <div className="space-y-10 sm:space-y-20">
          <Heading description="What I have being working on">
            My Latest <Fancy>Projects</Fancy>
          </Heading>
          <ProjectCard {...project} />
        </div>
      </section>
    </div>
  );
};

export default Projects;
