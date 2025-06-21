import React from "react";

interface HeadingProps {
  title: React.ReactNode;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <header className="font-source-code text-2xl sm:text-5xl font-bold text-center space-y-2 sm:space-y-6">
      <h1>{title}</h1>
      <p className="text-base sm:text-2xl text-gray-200/80 font-normal">
        {subtitle}
      </p>
    </header>
  );
};
export default Heading;
