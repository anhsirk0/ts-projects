import { useState, FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

const Select: FC<SelectProps> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOption) => {
    if (option.label !== value?.label) onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 max-w-xl w-full mx-auto">
      <p className="font-bold text-gray-800 px-2">
        Select your favorite Simpson
      </p>
      <div
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((open) => !open)}
        className="flex flex-col gap-4 items-center focus:outline-none"
      >
        <div className="flex w-full justify-between px-8 py-6 bg-white rounded-lg shadow-lg cursor-pointer">
          <p className="text-xl">{value?.label}</p>
          <ChevronDownIcon
            className={`h-5 w-5 font-bold transition duration-300 ${isOpen ? "" : "rotate-180"
              }`}
          />
        </div>
        <ul
          className={`list-none w-full bg-white rounded-lg shadow-lg overflow-hidden ${isOpen ? "block animate-fade" : "hidden"
            }`}
        >
          {options.map((option) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
              key={option.value}
              className={`px-8 py-6 text-xl hover:bg-indigo-200 cursor-pointer ${option.label === value?.label ? "bg-indigo-300" : ""
                }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
