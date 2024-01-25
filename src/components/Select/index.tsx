import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
};

const Select: React.FC<SelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="block border-2 border-blue-500 bg-white text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700 w-40"
        value={selectedOption}
        onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
