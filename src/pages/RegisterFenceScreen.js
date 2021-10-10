import React, {useState} from 'react';
import {
  VStack,
  Center,
  Heading,
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  Switch,
} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Fence() {
  const [active, setActive] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  async function storeData() {
    const bracelet = {
      active,
      start,
      end,
      lat,
      long,
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
        Criar uma nova Cerca Geográfica Digital
      </Heading>
      <HStack alignItems="center" space={4}>
        <Text>Ativo</Text>
        <Switch size="sm" />
      </HStack>
      <FormControl>
        <FormControl.Label>Início</FormControl.Label>
        <Input
          value={start}
          onChangeText={text => setStart(text)}
          size="2xl"
          placeholder="Digite um início"
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Fim</FormControl.Label>
        <Input
          value={end}
          onChangeText={text => setEnd(end)}
          size="2xl"
          placeholder="Digite um fim"
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Latitude</FormControl.Label>
        <Input
          value={lat}
          onChangeText={text => setLat(text)}
          size="2xl"
          placeholder="Digite uma latitude"
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Longitude</FormControl.Label>
        <Input
          value={long}
          onChangeText={text => setLong(text)}
          size="2xl"
          placeholder="Digite uma longitude"
        />
      </FormControl>
      <Button onPress={storeData}>Adicionar</Button>
    </VStack>
  );
}

export default function RegisterFenceScreen() {
  return (
    <NativeBaseProvider>
      <Center>
        <Fence />
      </Center>
    </NativeBaseProvider>
  );
}