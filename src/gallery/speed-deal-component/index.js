import React from 'react';
import SpeedDialButton from './SpeedDialButton';
import EditIcon from '@material-ui/icons/Edit';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TitleIcon from '@material-ui/icons/Title';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const speedDial = {
    actions: [ //the order rendered is inverse from the bottom to top
      { icon: <DeleteIcon />, name: 'Excluir Produto', backColor: '#4834d4', onClick: () => alert("1") },
      { icon: <MonetizationOnIcon />, name: 'Mudar Preço', backColor: 'var(--mainYellow)', onClick: () => alert("2") },
      { icon: <TitleIcon />, name: 'Editar Título', backColor: 'var(--mainYellow)', onClick: () => alert("3") },
      { icon: <AddAPhotoIcon />, name: 'Modificar Fotos', backColor: 'var(--mainYellow)', onClick: () => alert("4") },
    ]
}
export default function Main() {
    return (
        <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '200px', height: '200px', padding: '40px', backgroundColor: 'black'}}></div>
            <SpeedDialButton actions={speedDial.actions} />
        </div>
    );
}