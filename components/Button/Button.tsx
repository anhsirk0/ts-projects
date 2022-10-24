import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: FC = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-6 bg-sky-300 hover:bg-sky-400 rounded-lg shadow-lg"
    >
      {title}
    </button>
  );
};

export default Button;
