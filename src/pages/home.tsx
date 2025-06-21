import { Button } from "@/components/ui/button";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import P from "@/components/ui/paragraph";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 sm:px-10 pt-[60px] h-screen max-h-[480px] sm:min-h-[580px] flex items-center justify-center hero-gradient">
        <div className="m-auto space-y-10 max-w-[640px] text-indigo-50">
          <Heading
            title={
              <>
                Hi, I'm <Fancy>{"<Amriad/>"}</Fancy>
              </>
            }
            subtitle="A Fullstack Developer"
          />
          <P className="italic text-center">
            with the passion for building modern web applications that are
            functional, performant and elegant. Always excited to take new
            challenges.
          </P>
          {
            <div className="text-center space-x-4 space-y-4">
              <Button className="w-[125px] sm:w-[180px]" size="lg">
                Hire Me
              </Button>
              <Button
                className="w-[125px] sm:w-[180px]"
                variant="secondary"
                size="lg"
              >
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
