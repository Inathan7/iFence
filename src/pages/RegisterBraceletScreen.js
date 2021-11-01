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

import {useNavigation} from '@react-navigation/native';

import Database from '../database/Database';

function Bracelet() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const [bracelets, setBracelets] = useState([]);

  async function storeData() {
    const bracelet = {
      name,
      id,
    };

    Database.saveBracelet(bracelet).then(response =>
      navigation.navigate('Lista de Pulseiras', bracelet),
    );

    //Essa parte nao presta
    //setBracelets([...bracelets, bracelet]);
    // setBracelets(bracelets.push(bracelet));

    // const response = await AsyncStorage.getItem('@Bracelet:bracelets');

    // if (response) {
    //   bracelets = JSON.parse(response);
    // } ate aqui

    // const braceletList = [...bracelets, bracelet];
    // console.log('No BraceletList: ', braceletList);
    // setBracelets(braceletList);

    // await AsyncStorage.setItem(
    //   '@Bracelet:bracelets',
    //   JSON.stringify(bracelets),
    // );

    // navigation.navigate('Lista de Pulseiras');
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
          placeholder="Digite um nome"
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
