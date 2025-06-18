import { Button } from "@/components/ui/button";
import P from "@/components/ui/paragraph";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" py-[80px] h-screen min-h-[640px] flex items-center justify-center hero-gradient">
        <div className="m-auto space-y-10 max-w-[640px] text-indigo-50">
          <header className="font-source-code text-5xl font-bold text-center space-y-7">
            <h1>
              Hi, I'm{" "}
              <span
                className="primary-gradient bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text" }}
              >
                {"<Amriad/>"}
              </span>
            </h1>
            <p className="text-2xl text-gray-200/80 font-normal">
              A Fullstack Developer
            </p>
          </header>
          <P className="italic">
            with the passion for building modern web applications that are
            functional, performant and elegant. Always excited to take new
            challenges.
          </P>
          {
            <div className="text-center space-x-8">
              <Button className="w-[180px]" size="lg">
                Hire Me
              </Button>
              <Button className="w-[180px]" variant="secondary" size="lg">
                View Projects
              </Button>
            </div>
          }
        </div>
      </section>
    </div>
  );
};
export default Home;
