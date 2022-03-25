import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && e.currentTarget.checked && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: JSX.Element[] = options ? options.map((option, index) => (
        <label key={name + '-' + index}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                checked={option === value}
                value={option}
                {...restProps}
                // name, checked, value, onChange
            />
            {option}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
