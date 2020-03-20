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
    handleChange
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
    />
  );
};

export default CustomSelectInput;
