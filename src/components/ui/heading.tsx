import React from "react";

interface HeadingProps {
  title: React.ReactNode;
  subtitle: string;
}

/*
 <header className="font-source-code text-5xl font-bold text-center space-y-7">
      <h1>{title}</h1>
      <p className="text-2xl text-gray-200/80 font-normal">{subtitle}</p>
    </header>
*/

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <header className="font-source-code text-2xl font-bold text-center space-y-2">
      <h1>{title}</h1>
      <p className="text-base text-gray-200/80 font-normal">{subtitle}</p>
    </header>
  );
};
export default Heading;
