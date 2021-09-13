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
    <ContactCard
    {...rest}>
      <ContactCardData>
        <Text style={{ fontSize: 18 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 16 }}>
          {email}
        </Text>
        <Text style={{ fontSize: 14 }}>
          {phone}
        </Text>
      </ContactCardData>

    </ContactCard>
  )
}