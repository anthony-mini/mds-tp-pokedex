import { SelectProps } from '../../interfaces';

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
