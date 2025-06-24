import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";

const Projects = () => {
  return (
    <div className="relative">
      <div className="hero-gradient absolute top-0 left-0 w-full h-screen z-0"></div>
      <section className=" py-[100px] sm:py-[150px] m-auto max-w-[640px] px-6 relative z-10 space-y-12 sm:space-y-24">
        <div>
          <Heading description="What I have being working on">
            My Latest <Fancy>Projects</Fancy>
          </Heading>
        </div>
      </section>
    </div>
  );
};

export default Projects;
