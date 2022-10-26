import { FC, MouseEvent } from "react";

interface ButtonProps {
  onClick: (e: MouseEvent) => void;
  title: string;
}

const Button: FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-6 bg-sky-300 hover:bg-sky-400 active:scale-105 transition duration-75 rounded-lg shadow-lg"
    >
      {title}
    </button>
  );
};

export default Button;
