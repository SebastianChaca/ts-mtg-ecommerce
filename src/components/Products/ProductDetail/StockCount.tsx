import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
interface StockCnt {
  stock: number;
  quantity: number;
  classes: Record<'root' | 'select', string>;
  setQuantity(number: number): void;
}
const StockCount: React.FC<StockCnt> = ({
  stock,
  quantity,
  classes,
  setQuantity,
}) => {
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <div className={classes.root}>
      <p style={{ margin: 0, fontSize: 25 }}>Stock:</p>
      {stock > 0 ? (
        <FormControl fullWidth>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={quantity}
            disableUnderline
            className={classes.select}
            onChange={handleChange}
          >
            {[...Array(stock).keys()].map((item, index) => {
              return (
                <MenuItem
                  style={{ fontSize: 20 }}
                  key={index + 1}
                  value={item + 1}
                >
                  {item + 1}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ) : (
        <p style={{ color: 'red' }}> Sin Stock</p>
      )}
    </div>
  );
};

export default StockCount;
