import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const P = ({ className, children, ...rest }: PProps) => {
  return (
    <p
      className={cn(
        "text-sm text-gray-400/80 font-light leading-8 tracking-normal ",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
export default P;
