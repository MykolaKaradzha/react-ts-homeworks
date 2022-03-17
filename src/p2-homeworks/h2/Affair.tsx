import React from 'react'
import {AffairType} from "./HW2";
import { IconButton, TableCell, TableRow} from "@mui/material";
import {Delete} from "@mui/icons-material";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <>
            <TableRow>
                <TableCell>{props.affair.name}</TableCell>
                <TableCell>{props.affair.priority}</TableCell>
                <TableCell>
                    <IconButton onClick={deleteCallback} color={'error'}>
                        <Delete/>
                    </IconButton>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Affair
