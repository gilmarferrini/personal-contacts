import React from 'react'

import { MyContactCard, Button } from '../components/'

import { 
  Container,
  TitleArea,
  TitleText,
  Input, 
  Line
} from './styles'

export function Home() {
  return (
    <>
      <Container>
        <TitleArea>
          <TitleText
            style={{ color: '#001011' }}
          >
            Personal
          </TitleText>
          <TitleText
          style={{ color: '#98CE00' }}
          >
            Contacts
          </TitleText>
        </TitleArea>

        <Input 
          placeholder="Entre com o nome"
        />

        <Input 
          placeholder="Entre com o email"
          keyboardType="email-address"
        />

        <Input 
          placeholder="Entre com o telefone"
          keyboardType="numeric"
        />

        <Button 
          title="Adicionar"
        />

        <Line />

        <MyContactCard 
          name="Gilmar"
          email="ferrinigilmar@gmail.com"
          phone="998375424"
        />

        <Line />

        <MyContactCard 
          name="Gilmar"
          email="ferrinigilmar@gmail.com"
          phone="998375424"
        />

        <Line />

         <MyContactCard 
          name="Gilmar"
          email="ferrinigilmar@gmail.com"
          phone="998375424"
        />

        <Line />

        <MyContactCard 
          name="Gilmar"
          email="ferrinigilmar@gmail.com"
          phone="998375424"
        />

        <Line />

      </Container>
    </>
  )
}