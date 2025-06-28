import Fancy from "@/components/ui/fancy";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import P from "@/components/ui/paragraph";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SocialButtons from "@/components/social-buttons";
import { Send } from "lucide-react";

const Contacts = () => {
  return (
    <div className="relative">
      <div className="hero-gradient absolute top-0 left-0 w-full h-screen z-0"></div>
      <section className=" py-[100px] sm:py-[150px] m-auto max-w-[640px] px-6 relative z-10 space-y-12 sm:space-y-24">
        <div className="space-y-6 sm:space-y-8">
          <Heading description={"Let's build something awesome"}>
            Get in <Fancy>Touch</Fancy>
          </Heading>
          <P className="text-center">
            If you're looking for a reliable fullstack developer for your next
            project, feel free to contact me using the links or the form below.
          </P>
        </div>
        <div className="space-y-2 sm:space-y-6 text-center">
          <h2 className="mb-8 sm:mb-10 font-source-code text-lg sm:text-2xl">
            Send A Message
          </h2>

          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" className="h-[240px]" />
          <div className="flex items-center justify-center mt-8  gap-4 sm:gap-8">
            <Button className="w-[125px] sm:w-[200px]" size="lg">
              Send
            </Button>
            <span>Or</span>
            <SocialButtons />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
