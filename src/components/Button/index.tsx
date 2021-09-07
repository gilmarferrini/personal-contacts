import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
  TouchableOpacityButton, 
  TouchableOpacityButtonText,
  DeleteImage 
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  titleHexColor ?: string
}

export function Button({ 
  title, 
  titleHexColor = "#000000", 
  ...rest 
}: ButtonProps) {
  return (
    <TouchableOpacityButton
      activeOpacity={0.8}
      {...rest}
    >
      <TouchableOpacityButtonText
        style={{ color: titleHexColor }}
      >
        {title}
      </TouchableOpacityButtonText>
    </TouchableOpacityButton>
  )
}