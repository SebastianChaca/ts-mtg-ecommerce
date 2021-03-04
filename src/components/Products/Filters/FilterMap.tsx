import { MenuItem, Select, FormControl } from '@material-ui/core';
import React from 'react';
import { makeStylesFilterCategoria } from '../../../utils/styles';

interface CategoriasState {
  filters: string;
  values: string[];
  handleChange(e: any): void;
}
const CategoriaMap: React.FC<CategoriasState> = ({
  filters,
  values,
  handleChange,
}) => {
  const classes = makeStylesFilterCategoria();
  return (
    <div className='filter-map'>
      <FormControl fullWidth>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          disableUnderline
          value={filters}
          className={classes.select}
          onClick={handleChange}
        >
          {values.map((value, index) => {
            return (
              <MenuItem style={{ fontSize: 20 }} key={index + 1} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoriaMap;
