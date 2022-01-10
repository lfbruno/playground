import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

PanelHiddenContent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function PanelHiddenContent({ data }) {
    const {
        _id,
        cpf,
        loyaltyScores,
        role,
        phone,
        maritalStatus,
        birthday,
        email,
        createdAt,
    } = data;

    return (
        <div
            className="text-title"
            style={{ userSelect: "text" }}
        >
            <div>
                <p>CPF: {cpf}</p>
            </div>
            <div>
                <p>Email: {email}</p>
            </div>
            <div>
                <p>Contato: {phone}</p>
            </div>
            <div>
                <p>Aniversário: {birthday}</p>
            </div>
            <div>
                <p>Estado Civil: {maritalStatus}</p>
            </div>
            <div>
                <p>ID SISTEMA: {_id}</p>
            </div>
        </div>
    );
}
