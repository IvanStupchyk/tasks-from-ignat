import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeRangeDoubleSlider = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    const settingsDoubleSlider = {
        min: 0,
        max: 100,
        step: 1,
        disabled: value1 === 100 && value2 === 100
    }

    return (
        <div>
            <hr/>
            homework 11
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRangeDoubleSlider}
                    value={[value1, value2]}
                    min={settingsDoubleSlider.min}
                    max={settingsDoubleSlider.max}
                    step={settingsDoubleSlider.step}
                    disabled={settingsDoubleSlider.disabled}
                />
                <span>{value2}</span>
            </div>
        </div>
    )
}

export default HW11
