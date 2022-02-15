import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <>
            <tr>
                <td className={styles.name}>{props.affair.name}</td>
                <td className={styles.priority}>{props.affair.priority}</td>
                <td><button className={styles.deleteButton} onClick={deleteCallback}>X</button></td>
            </tr>

        </>
    )
}

export default Affair
