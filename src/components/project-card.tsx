import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import P from "./ui/paragraph";
import { Github, MoveRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  stack: string[];
}

const ProjectCard = ({
  title,
  description,
  features,
  stack,
}: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-b from-gray-600/50 to-75% to-transparent rounded-3xl p-[1px]">
      <Card className="relative pt-2 sm:pt-6  sm:px-4 gap-4 sm:gap-6 lg:flex-row border-none ">
        <div className="h-[240px] lg:w-1/2 px-2 sm:h-[320px] md:h-[360px]">
          <div className="w-full h-full bg-gray-900 rounded-2xl "></div>
        </div>
        <div className="space-y-4 sm:space-y-6 lg:w-1/2 ">
          <CardHeader className="px-4">
            <CardTitle className="text-xl sm:text-3xl font-source-code font-bold uppercase ">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-8 px-4 mb-8">
            <P>{description}</P>
            <div>
              <h3 className="text-base sm:text-2xl text-gray-200/80 font-normal mb-2 sm:mb-4">
                Key Features
              </h3>
              <ul className="list-inside list-disc text-sm sm:text-lg text-gray-400/80 font-light leading-8 tracking-normal">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-2xl text-gray-200/80 font-normal mb-2 sm:mb-4">
                Tech Stack
              </h3>
              <div className="space-x-2 space-y-2 ">
                {stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className=" py-4 px-4 space-x-4">
            <Link to="https://amriad7.github.io/personal-portfolio/">
              <Button className="group w-[110px] sm:w-[150px]">
                Live Demo
                <MoveRight className="text-foreground size-0 opacity-0 transition-all group-hocus:size-4 sm:group-hocus:size-5 group-hocus:opacity-100" />
              </Button>
            </Link>
            <Link to="https://github.com/Amriad7/personal-portfolio">
              <Button
                variant="secondary"
                className="group text-foreground/80 hocus:text-foreground"
              >
                <Github className="size-3 sm:size-5 stroke-0 fill-foreground/80 group-hocus:fill-foreground" />
                Project Code
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
