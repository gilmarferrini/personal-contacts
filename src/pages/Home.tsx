import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MyContactCard } from '../components/MyContactCard'
import { Button } from '../components/Button'

import { 
  Container,
  TitleArea,
  TitleText,
  Input, 
  Line
} from './styles'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

export function Home() {

  const [ contacts, setContacts ] = useState<Contact[]>([])
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')

  function handleAddNewContact() {
    const id = new Date().getTime().toString()
    const contact = {
      id,
      name,
      email,
      phone
    }

    setContacts([...contacts, contact])
  }

  useEffect(() => {

    async function saveContacts() {
      await AsyncStorage.setItem('myContacts', JSON.stringify(contacts))
    }

    saveContacts()
  }, [contacts])

  useEffect(() => {
    async function loadContacts() {
      const storagedContacts = await AsyncStorage.getItem('myContacts')
      if (storagedContacts) {
        setContacts(JSON.parse(storagedContacts))
      }
  
    }

    loadContacts()
  }, [])

  function deleteContactCard(id: string) {
    const filteredContactCard = contacts.filter(c => c.id !== id)
    console.log('chamou')
    setContacts(filteredContactCard)
  }

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
          value={name}
          onChangeText={value => setName(value)}
        />

        <Input 
          placeholder="Entre com o email"
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <Input 
          placeholder="Entre com o telefone"
          keyboardType="numeric"
          value={phone}
          onChangeText={value => setPhone(value)}
        />

        <Button 
          title="Adicionar"
          onPress={handleAddNewContact}
        />

        <FlatList 
          showsVerticalScrollIndicator={false}
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Line />

              <MyContactCard 
                id={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                onPress={() => deleteContactCard(item.id)}
              />
            </>
          )}

        />

        <Line />

      </Container>
    </>
  )
}