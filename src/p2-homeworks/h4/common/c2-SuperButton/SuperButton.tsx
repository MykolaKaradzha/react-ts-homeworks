import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "../c2-SuperButton/SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${className} ${red ? s.red : ''}`
    return (
        <button className={finalClassName} {...restProps}/>
    )
}

export default SuperButton
