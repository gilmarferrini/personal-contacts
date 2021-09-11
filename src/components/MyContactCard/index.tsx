import React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'

import { Button } from '../Button'

import {
  ContactCard,
  ContactCardData,
} from './styles'

interface ContactCardProps extends TouchableOpacityProps {
  id: string
  name: string
  email: string
  phone: string
}

export function MyContactCard({ id, name, email, phone, ...rest }: ContactCardProps) {
 
  return (
    <ContactCard>
      <ContactCardData>
        <Text>
          {name}
        </Text>
        <Text>
          {email}
        </Text>
        <Text>
          {phone}
        </Text>
      </ContactCardData>

      <Button 
        title="Apagar"
        titleHexColor="#ffffff"
        style={{ backgroundColor: '#FE5F55' }}
        {...rest}
      />

    </ContactCard>
  )
}