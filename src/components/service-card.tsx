import type { HTMLAttributes, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import P from "./ui/paragraph";

export const CardIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <span className="size-12 sm:size-18 rounded-full text-center text-white p-3 sm:p-5 bg-primary shadow-inner shadow-sky-200/50 absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2">
      {icon}
    </span>
  );
};

interface ServiceCardProp extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProp) => {
  return (
    <div className="bg-gradient-to-b from-gray-600/50 to-75% to-transparent rounded-3xl p-[1px] mt-6 max-w-[360px] sm:max-w-[480px] hocus:-translate-y-4 transition-transform ease-in">
      <Card className="relative pt-10 sm:pt-14 sm:px-6 gap-4 sm:gap-6 border-none hocus:bg-gradient-to-b dark:from-gray-900 from-indigo-100 to-card to-80%">
        <CardIcon icon={icon} />
        <CardHeader>
          <CardTitle className="whitespace-pre-line text-foreground text-xl sm:text-3xl font-source-code font-bold uppercase text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <P>{description}</P>
        </CardContent>
      </Card>
    </div>
  );
};
export default ServiceCard;
