import { Button } from "@/components/ui/button";
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
          {/* m-auto space-y-8 max-w-[640px] text-indigo-50 border */}
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
              <Button className="w-[125px] sm:w-[200px]" size="lg">
                Download CV
              </Button>
              <div className="inline space-x-2 sm:space-x-4">
                <Button className="" variant="secondary" size="icon">
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button className="" variant="secondary" size="icon">
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button className="" variant="secondary" size="icon">
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
