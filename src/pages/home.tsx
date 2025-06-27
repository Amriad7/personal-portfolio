import CTAButton from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import P from "@/components/ui/paragraph";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 sm:px-10 pt-[60px] h-screen max-h-[480px] sm:min-h-[580px] flex items-center justify-center hero-gradient">
        <div className="m-auto space-y-10 max-w-[640px] text-indigo-50">
          <Heading description="A Fullstack Developer">
            Hi, I'm <Fancy>{"<Amriad/>"}</Fancy>
          </Heading>
          <P className="italic text-center">
            with the passion for building modern web applications that are
            functional, performant and elegant. Always excited to take new
            challenges.
          </P>
          {
            <div className="text-center space-x-4 space-y-4">
              <Link to="/contacts">
                <CTAButton className="w-[125px] sm:w-[180px]" size="lg">
                  Hire Me
                </CTAButton>
              </Link>
              <Link to="/projects">
                <Button
                  className="w-[125px] sm:w-[180px] group"
                  variant="secondary"
                  size="lg"
                >
                  View Projects
                  <MoveRight className="text-primary size-0 opacity-0 transition-all group-hocus:size-4 sm:group-hocus:size-5 group-hocus:opacity-100" />
                </Button>
              </Link>
            </div>
          }
        </div>
      </section>
    </div>
  );
};
export default Home;
