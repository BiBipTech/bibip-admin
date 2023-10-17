import { type FunctionComponent } from "react";
import Select from "react-select";

import { type StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import Spinner from "../misc/Spinner/Spinner";

interface SelectInputProps extends StateManagerProps<OptionType, true> {
  items: { label: string; value: string }[];
  placeholder: string;
  selectedItem: { label: string; value: string };
  name: string;
}

const SelectInput: FunctionComponent<SelectInputProps> = ({
  items,
  placeholder,
  name,
  ...props
}) => {
  return (
    <Select
      name={name}
      isMulti
      styles={{
        control: (provided) => ({
          ...provided,
          boxShadow: "none",
          borderWidth: "1px",
          borderRadius: "6px",
          borderColor: "rgb(209 213 219)",
          height: "48px",
        }),
      }}
      className="basic-multi-select w-full"
      classNamePrefix="select"
      placeholder={placeholder}
      isClearable
      isSearchable
      loadingMessage={() => (
        <div className="mb-2 flex h-4 flex-col justify-start">
          <Spinner spinnerSize={20} />
        </div>
      )}
      options={items}
      {...props}
    />
  );
};

export default SelectInput;
export type OptionType = {
  label: string;
  value: string;
};
