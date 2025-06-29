import { Separator } from "./ui/separator";
import P from "./ui/paragraph";

const Footer = () => {
  return (
    <div>
      <Separator />
      <footer className="flex items-center justify-center h-[60px] sm:h-[80px] w-full">
        <P className="italic">
          <span className="font-semibold text-foreground">
            (c) 2025 Amriad.
          </span>
          All rights reserved.
        </P>
      </footer>
    </div>
  );
};
export default Footer;
