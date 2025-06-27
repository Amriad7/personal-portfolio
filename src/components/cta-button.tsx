import { Button } from "./ui/button";
import type { ComponentProps } from "react";

const CTAButton = ({ children, ...props }: ComponentProps<typeof Button>) => {
  return (
    <span className="inline-block transition-all ease-in rounded-full hocus:shadow-lg hocus:shadow-sky-600/50 hocus:-translate-y-1">
      <Button {...props}>{children}</Button>
    </span>
  );
};
export default CTAButton;
