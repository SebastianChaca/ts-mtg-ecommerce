import { Radio } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { makeStylesMetodoDePago } from '../../../utils/styles';

const StyledRadio = (props) => {
  const classes = makeStylesMetodoDePago();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default StyledRadio;
