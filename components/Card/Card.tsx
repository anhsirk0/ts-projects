import { FC, ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-4 bg-white rounded-2xl">
      <p className="text-xl lg:text-2xl">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
