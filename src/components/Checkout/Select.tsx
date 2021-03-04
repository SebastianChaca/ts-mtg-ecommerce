import React from 'react';

import { useClick } from '../../hooks/CheckoutHooks/useClick';
import FormSelect from './CheckoutComponents/FormSelect';
import SelectMapping from './CheckoutComponents/SelectMapping';
interface SelectInterface {
  name: string;
  values: string[];
  title: string;
  link: string;
}
const Select: React.FC<SelectInterface> = ({ name, values, title, link }) => {
  const [selectValue, handleClick] = useClick();
  return (
    <div>
      <FormSelect title={title} selectValue={selectValue}>
        <SelectMapping
          name={name}
          values={values}
          link={link}
          handleClick={handleClick}
        />
      </FormSelect>
    </div>
  );
};
export default Select;
