import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

interface FancyProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const Fancy = ({ children, className, ...props }: FancyProps) => {
  return (
    <span
      className={cn(
        "primary-gradient bg-clip-text text-transparent",
        className
      )}
      style={{ WebkitBackgroundClip: "text" }}
      {...props}
    >
      {children}
    </span>
  );
};
export default Fancy;
