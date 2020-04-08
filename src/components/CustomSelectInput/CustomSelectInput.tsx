import React from 'react';
import Select, { ValueType, ActionMeta } from 'react-select';

export interface IOptions {
  value: string;
  label: string;
}

interface ICustomSelectInputProps {
  name: string;
  placeholder: string;
  options: Array<IOptions>;
  selectedValue?: IOptions | null;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  handleChange: (value: ValueType<IOptions>, action?: ActionMeta) => void;
}

const CustomSelectInput: React.FC<ICustomSelectInputProps> = props => {
  const {
    name,
    placeholder,
    selectedValue,
    options,
    className,
    isLoading,
    isDisabled,
    isClearable,
    handleChange,
    isSearchable
  } = props;
  return (
    <Select
      name={name}
      className={className}
      placeholder={placeholder}
      value={selectedValue}
      onChange={handleChange}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isClearable={isClearable}
      options={options}
      defaultValue={selectedValue}
      isSearchable={isSearchable}
    />
  );
};

export default CustomSelectInput;
