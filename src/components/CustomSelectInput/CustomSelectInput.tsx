import React from 'react';
import Select, { ValueType, ActionMeta } from 'react-select';

export interface IOptionProps {
  value: string;
  label: string;
}

interface ICustomSelectFieldProps {
  name: string;
  placeholder: string;
  options: Array<IOptionProps>;
  selectedValue?: IOptionProps | null;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  handleChange: (value: ValueType<IOptionProps>, action?: ActionMeta) => void;
}

const CustomSelectField: React.FC<ICustomSelectFieldProps> = props => {
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

export default CustomSelectField;
