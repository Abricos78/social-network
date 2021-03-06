import React from 'react';
import style from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            {props.content}
        </div>
    )
}

export default Dialog