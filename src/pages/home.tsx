import { Button } from "@/components/ui/button";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import P from "@/components/ui/paragraph";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 py-[80px] h-screen max-h-[540px] flex items-center justify-center hero-gradient">
        <div className="m-auto space-y-10 max-w-[640px] text-indigo-50">
          <Heading
            title={
              <>
                Hi, I'm <Fancy>{"<Amriad/>"}</Fancy>
              </>
            }
            subtitle="A Fullstack Developer"
          />
          <P className="italic">
            with the passion for building modern web applications that are
            functional, performant and elegant. Always excited to take new
            challenges.
          </P>
          {
            <div className="text-center space-x-4">
              <Button className="w-[125px]" size="lg">
                Hire Me
              </Button>
              <Button className="w-[125px]" variant="secondary" size="lg">
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
