import { FormControlLabel, RadioGroup, Zoom } from '@material-ui/core';
import React from 'react';
import StyledRadio from './StyledRadio';
interface SelectInterface {
  name: string;
  values: string[];
  link: string;
  handleClick(name: string, values: string, link: string): void;
}

const SelectMapping: React.FC<SelectInterface> = ({
  name,
  values,
  link,
  handleClick,
}) => {
  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <RadioGroup>
          {values.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                onChange={() => {
                  handleClick(name, value, link);
                }}
                value={value}
                control={<StyledRadio />}
                label={value}
                name={name}
              />
            );
          })}
        </RadioGroup>
      </Zoom>
    </div>
  );
};

export default SelectMapping;
