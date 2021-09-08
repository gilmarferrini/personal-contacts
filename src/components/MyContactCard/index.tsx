import React from 'react'
import { Text } from 'react-native'

import { Button } from '../Button'

import {
  ContactCard,
  ContactCardData,
} from './styles'

interface ContactCardProps {
  name: string
  email: string
  phone: string
}

export function MyContactCard({ name, email, phone }: ContactCardProps) {
 
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
      />

    </ContactCard>
  )
}