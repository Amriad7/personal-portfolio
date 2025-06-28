import CTAButton from "@/components/cta-button";
import SocialButtons from "@/components/social-buttons";
import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import MyPhoto from "@/components/ui/my-photo";
import P from "@/components/ui/paragraph";

const About = () => {
  return (
    <div>
      {/* ABOUT SECTION */}
      <section className="px-6 sm:px-10 pt-[80px] mb-[80px] sm:mb-[100px] min-h-screen  sm:min-h-[580px] flex items-center justify-center hero-gradient">
        <div className="m-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-20">
          {/* PROFILE PICTURE */}
          <MyPhoto />
          {/* CONTENT */}
          <div className=" space-y-8 sm:space-y-10 max-w-[540px]">
            <Heading
              className="lg:text-start"
              description="The Guy Behind the Code"
            >
              Who is <Fancy>Amriad</Fancy>
            </Heading>
            <P>
              I'm a fullstack developer based in Algeria with a CS background
              and a self-taught mindset. I enjoy building modern web apps,
              constantly learnning and improving my skills in the field.
            </P>
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8">
              <CTAButton className="w-[125px] sm:w-[200px]" size="lg">
                Download CV
              </CTAButton>
              <SocialButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
