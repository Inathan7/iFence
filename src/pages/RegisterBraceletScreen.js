import React, {useState} from 'react';
import {
  VStack,
  Center,
  Heading,
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Bracelet() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  async function storeData() {
    const bracelet = {
      name,
      id,
    };
    await AsyncStorage.setItem('bracelet', JSON.stringify(bracelet));
  }

  return (
    <VStack
      space={4}
      w={{
        base: '70%',
        md: '20%',
      }}>
      <Heading fontSize="3xl" mt="10" textAlign="center" mb="10">
        Criar uma nova Pulseira
      </Heading>
      <FormControl>
        <FormControl.Label>Nome</FormControl.Label>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          size="2xl"
          placeholder="Digite um identificador"
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Identificador</FormControl.Label>
        <Input
          value={id}
          onChangeText={text => setId(text)}
          size="2xl"
          placeholder="Digite um identificador"
        />
      </FormControl>
      <Button onPress={storeData}>Adicionar</Button>
    </VStack>
  );
}

export default function RegisterBraceletScreen() {
  return (
    <NativeBaseProvider>
      <Center>
        <Bracelet />
      </Center>
    </NativeBaseProvider>
  );
}
