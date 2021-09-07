import React from 'react'
import { Text } from 'react-native'
import deleteImage from '../../../assets/delete.png'

import { Button } from '../index'

import {
  ContactCard,
  ContactCardData,
  TouchableOpacityButton,
  DeleteImage
} from './styles'

interface ContactCardProps {
  name: string
  email: string
  phone: string
}

export function MyContactCard({ name, email, phone }: ContactCardProps) {
  console.log(typeof deleteImage)
 
  return (
    <ContactCard>
      <ContactCardData>
        <Text>
          Gilmar
        </Text>
        <Text>
          ferrinigilmar@gmail.com
        </Text>
        <Text>
          998375424
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