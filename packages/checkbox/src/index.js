import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
// import { T } from '@zcool/util'
import Icon from '@zcool/icon'

const Label = styled.label`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  cursor: ${props => `${props.disable ? 'not-allowed' : 'pointer'}`};
  svg {
    width: ${props => `${props.width}px`};
    height: ${props => `${props.width}px`};
  }
`

function Checkbox({ width, disable, onCheck, value }) {
  const [checked, setChecked] = useState(value)

  const handleChange = () => {
    if (disable) {
      return false
    }
    onCheck(!checked)
    setChecked(!checked)
  }

  return (
    <div>
      <Label onClick={handleChange} disable={disable}>
        {checked ? (
          disable ? (
            <Icon glyph="checkbox-checked-disabled" size={width} />
          ) : (
            <Icon glyph="checkbox-checked" size={width} />
          )
        ) : disable ? (
          <Icon glyph="checkbox-disabled" size={width} />
        ) : (
          <Icon glyph="checkbox" size={width} />
        )}
      </Label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  theme,
  width: 16,
  // width: T('icon.size.md'),
  disable: false,
  onCheck: () => {},
  value: false
}

export default Checkbox