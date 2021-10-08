import React from 'react';
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

function Bracelet() {
  return (
    <VStack
      space={4}
      w={{
        base: '70%',
        md: '20%',
      }}>
      <Heading fontSize="3xl" mt="10" textAlign="center" mb="10">
        Criar uma nova erca Geográfica Digital
      </Heading>
      <HStack alignItems="center" space={4}>
        <Text>Ativo</Text>
        <Switch size="sm" />
      </HStack>
      <FormControl>
        <FormControl.Label>Início</FormControl.Label>
        <Input size="2xl" placeholder="Digite um início" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Fim</FormControl.Label>
        <Input size="2xl" placeholder="Digite um fim" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Latitude</FormControl.Label>
        <Input size="2xl" placeholder="Digite uma latitude" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Longitude</FormControl.Label>
        <Input size="2xl" placeholder="Digite uma longitude" />
      </FormControl>
      <Button onPress={() => alert('Cerca adicionada!')}>Adicionar</Button>
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
