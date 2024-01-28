import { SelectProps } from '../../interfaces';

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
  <div className="flex justify-between items-center bg-white py-2 px-4 rounded">
    <select
      value={value}
      onChange={onChange}
      className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
