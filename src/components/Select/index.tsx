import { SelectProps } from '../../interfaces';

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
  <div className="flex justify-between items-center">
    <select value={value} onChange={onChange} className="select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
