import type { ReactNode, HTMLAttributes } from "react";

interface FancyProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const Fancy = ({ children, ...props }: FancyProps) => {
  return (
    <span
      className="primary-gradient bg-clip-text text-transparent"
      style={{ WebkitBackgroundClip: "text" }}
      {...props}
    >
      {children}
    </span>
  );
};
export default Fancy;
