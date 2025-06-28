import { Link } from "react-router";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    platform: "github",
    link: "https://github.com/Amriad7",
    icon: (
      <Github className="size-3 sm:size-5 stroke-0 fill-foreground/80 group-hocus:fill-foreground" />
    ),
  },
  {
    platform: "facebook",
    link: "#",
    icon: (
      <Facebook className="size-3 sm:size-5 stroke-0 fill-foreground/80 group-hocus:fill-foreground" />
    ),
  },
  {
    platform: "linked-in",
    link: "#",
    icon: (
      <Linkedin className="size-3 sm:size-5 stroke-0 fill-foreground/80 group-hocus:fill-foreground" />
    ),
  },
];

const SocialButtons = () => {
  return (
    <div className="inline space-x-2 sm:space-x-4">
      {socialLinks.map(({ link, icon }) => (
        <Link to={link}>
          <Button
            className="group hocus:scale-110 transition-transform"
            variant="secondary"
            size="icon"
          >
            {icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};
export default SocialButtons;
