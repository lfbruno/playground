import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import KeypadHandler from './KeypadHandler';
import PropTypes from 'prop-types';

KeypadButton.propTypes = {
    title: PropTypes.string.isRequired,
    titleIcon: PropTypes.string.isRequired,
    keyboardType: PropTypes.string,
    setSelectedValue: PropTypes.func,
}


export default function KeypadButton({
    title,
    titleIcon,
    keyboardType,
    setSelectedValue }) {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = (value, isCancel = false) => {
    setOpen(false);
    setSelectedValue(isCancel ? "0" : value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onOpen}>
        Abrir Teclado
      </Button>
      <KeypadHandler
            open={open}
            onClose={onClose}
            title={title}
            titleIcon={titleIcon}
            keyboardType={keyboardType}
      />
    </div>
  );
}

/*
USAGE EXEMPLE:
const [selectedValue, setSelectedValue] = useState("0");

return (
    <Fragment>
        <p className="text-default">NEW VALUE: {selectedValue}</p>
        <KeypadButton
            title="Digite o Valor Gasto"
            titleIcon="far fa-money-bill-alt"
            keyboardType="numeric"
            setSelectedValue={setSelectedValue}
        />
    </Fragment>
);
 */