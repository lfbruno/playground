import React, { useState } from 'react';
import Display from './Display';
import IconAndTitle from './IconAndTitle';
import Dialog from '@material-ui/core/Dialog';
import Keyboard from './Keyboard';
import PropTypes from 'prop-types';

NumericKeypad.propTypes = {
    title: PropTypes.string,
    titleIcon: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    keyboardType: PropTypes.string,
}

const defaultValue = {
    numeric: "0,0",
    cpf: "0"
}
export default function NumericKeypad({
    title,
    titleIcon,
    keyboardType,
    onClose,
    open
}) {

    const [display, setDisplay] = useState(defaultValue[keyboardType]);

    const handleClose = () => {
      setDisplay(defaultValue[keyboardType])
      onClose(display, true);
      console.log("HERE GOES THE SHOWSNACKBAR: `Operação Cancelada.`");
    };

    const handleConfirm = () => {
      // HERE GOES SOME VALIDATION
      onClose(display);
      // NEED REDIRECT OTHER COMPONENT NEXT
    };

    return (
        <Dialog
            maxWidth={'md'}
            disableBackdropClick={true}
            onClose={handleClose}
            aria-labelledby="keypad"
            open={open}
        >
            <IconAndTitle
                title={title}
                titleIcon={titleIcon}
            />
            <Display display={display} />
            <Keyboard
                setDisplay={setDisplay}
                display={display}
                handleConfirm={handleConfirm}
                handleClose={handleClose}
                keyboardType={keyboardType}
            />
        </Dialog>
    );
}


