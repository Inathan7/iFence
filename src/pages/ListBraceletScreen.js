import React, {useEffect, useState} from 'react';
import {
  Box,
  FlatList,
  Heading,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Menu,
  Pressable,
  HamburgerIcon,
} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Database from '../database/Database';

function ListBracelet() {
  const data = [
    {
      id: 'inathan',
      fullName: 'Pulseira de Inathan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
    },
    {
      id: 'elenilson',
      fullName: 'Pulseira de Elenilson',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
    },
    {
      id: 'victor',
      fullName: 'Pulseira de Victor',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
    },
  ];

  const [bracelets, setBracelets] = useState([]);

  const clear = async () => {
    await AsyncStorage.clear();
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem('@Bracelet:bracelets');
  //       setBracelets(jsonValue != null ? JSON.parse(jsonValue) : null);
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   async function loadData() {
  //     setBracelets(
  //       JSON.parse(await AsyncStorage.getItem('@Bracelet:bracelets')),
  //     );
  //   }
  //   loadData();
  // }, []);

  useEffect(() => {
    Database.getItems().then(items => setBracelets(items));
  }, []);

  return (
    <Box
      w={{
        base: '100%',
        md: '25%',
      }}>
      <Heading fontSize="3xl" mt="10" textAlign="center" mb="10">
        Lista de Pulseiras
      </Heading>
      <FlatList
        data={bracelets}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Id:
                  {item.id}
                </Text>
              </VStack>
              <Spacer />
              <Box alignSelf="flex-start">
                <Menu
                  w="190"
                  trigger={triggerProps => {
                    return (
                      <Pressable
                        accessibilityLabel="More options menu"
                        {...triggerProps}>
                        <HamburgerIcon />
                      </Pressable>
                    );
                  }}>
                  <Menu.Item>Editar</Menu.Item>
                  <Menu.Item>Mapa</Menu.Item>
                  <Menu.Item onPress={clear}>Deletar</Menu.Item>
                </Menu>
              </Box>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export default function ListBraceletScreen() {
  return (
    <NativeBaseProvider>
      <Center>
        <ListBracelet />
      </Center>
    </NativeBaseProvider>
  );
}
