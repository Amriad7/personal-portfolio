import { cn } from "@/lib/utils";
import React from "react";
import type { ReactNode, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  description?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  description,
  className,
  ...props
}) => {
  return (
    <header
      className={cn(
        "font-source-code text-2xl sm:text-5xl font-bold text-foreground text-center space-y-2 sm:space-y-6",
        className
      )}
      {...props}
    >
      <h1>{children}</h1>
      {description && (
        <p className="text-base sm:text-2xl text-foreground/75 font-normal">
          {description}
        </p>
      )}
    </header>
  );
};
export default Heading;
