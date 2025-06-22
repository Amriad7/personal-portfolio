import { Button } from "@/components/ui/button";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import MyPhoto from "@/components/ui/my-photo";
import P from "@/components/ui/paragraph";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="px-6 sm:px-10 pt-[80px] mb-[80px] min-h-screen  sm:min-h-[580px] flex items-center justify-center hero-gradient">
        <div className="m-auto space-y-8 max-w-[640px] text-indigo-50">
          <MyPhoto />

          <Heading
            title={
              <>
                Who is <Fancy>Amriad</Fancy>
              </>
            }
            subtitle="The Guy Behind the Code"
          />
          <P>
            I'm a fullstack developer based in Algeria with a CS background and
            a self-taught mindset. I enjoy building modern web apps, constantly
            learnning and improving my skills in the field.
          </P>
          <div className="text-center space-x-4 space-y-4">
            <Button className="w-[125px] sm:w-[180px]" size="lg">
              Download CV
            </Button>
            <Button
              className="w-[125px] sm:w-[180px]"
              variant="secondary"
              size="lg"
            >
              Socials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
