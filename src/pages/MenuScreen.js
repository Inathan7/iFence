import React from 'react';
import {VStack, Center, Heading, NativeBaseProvider, Button} from 'native-base';

import {useNavigation} from '@react-navigation/native';

function Menu() {
  const navigation = useNavigation();
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10" fontSize="4xl">
        Menu
      </Heading>
      <Button
        onPress={() => navigation.navigate('Registrar Pulseira')}
        w="80"
        h="20"
        bg="primary.200"
        rounded="md"
        shadow={3}>
        <Heading fontSize="3xl">Pulseira</Heading>
      </Button>
      <Button
        onPress={() => navigation.navigate('Registrar Cerca')}
        w="80"
        h="20"
        bg="primary.200"
        rounded="md"
        shadow={3}>
        <Heading fontSize="3xl">Cerca</Heading>
      </Button>
      <Button w="80" h="20" bg="primary.200" rounded="md" shadow={3}>
        <Heading fontSize="3xl">Mapa</Heading>
      </Button>
    </VStack>
  );
}

export default function MenuScreen() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Menu />
      </Center>
    </NativeBaseProvider>
  );
}
