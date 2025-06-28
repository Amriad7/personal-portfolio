import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const P = ({ className, children, ...rest }: PProps) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-lg dark:text-gray-400/80 dark:font-light font-normal text-foreground/60 leading-8 tracking-normal ",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
export default P;
