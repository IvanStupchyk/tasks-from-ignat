import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType =  {
    onChangeRange: (value: number[]) => void
    value: [number, number]
    min: number
    max: number
    step: number
    disabled: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled,
        ...restProps
    }
) => {

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <Slider
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                style={{width: '120px'}}
                {...restProps}
            />
        </>
    )
}

export default SuperDoubleRange
