import React from 'react';
import {
  VStack,
  Center,
  Heading,
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
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
        Criar uma nova Pulseira
      </Heading>
      <FormControl>
        <FormControl.Label>Nome</FormControl.Label>
        <Input size="2xl" placeholder="Digite um nome" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Identificador</FormControl.Label>
        <Input size="2xl" placeholder="Digite um identificador" />
      </FormControl>
      <Button onPress={() => alert('Pulseira adicionada!')}>Adicionar</Button>
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
