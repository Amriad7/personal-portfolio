import ServiceCard from "@/components/service-card";
import Heading from "@/components/ui/heading";
import Fancy from "@/components/ui/fancy";
import { CodeXml, Database, PencilRuler, Braces } from "lucide-react";

const services = [
  {
    icon: <CodeXml className="size-6 sm:size-8" />,
    title: "Fullstack Web\n Developement",
    description:
      "Custom web applications built from front to back — scalable, secure, and optimized for performance. I handle everything from the UI to the database.",
  },
  {
    icon: <PencilRuler className="size-6 sm:size-8" />,
    title: "UI/UX Design &\n Implementation",
    description:
      "User-focused interfaces that are intuitive, modern, and responsive. I design clean UIs and bring them to life with tools like Figma, React, and Tailwind.",
  },
  {
    icon: <Database className="size-6 sm:size-8" />,
    title: "Databases \n Management",
    description:
      "Designing and managing structured, scalable databases (MySQL, MongoDB). I handle schema design, optimization, and data integrity for high-performance apps",
  },
  {
    icon: <Braces className="size-6 sm:size-8" />,
    title: "Design to Code\n Conversion",
    description:
      "Turn your Figma, Sketch, or XD designs into production-ready, pixel-accurate code with fully responsive layouts.",
  },
];

const Services = () => {
  return (
    <div className="relative">
      <div className="hero-gradient absolute top-0 left-0 w-full h-screen z-0"></div>
      <section className="py-[100px] sm:py-[150px] px-6">
        <div className="space-y-14 sm:space-y-24">
          <Heading description="My top quality services">
            What I <Fancy>Offer</Fancy>
          </Heading>
          <div className="flex gap-4 sm:gap-10 items-center justify-center flex-wrap">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
