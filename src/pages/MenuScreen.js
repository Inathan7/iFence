import React from 'react';
import {VStack, Center, Heading, NativeBaseProvider, Button} from 'native-base';

function Menu() {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10" fontSize="4xl">
        Menu
      </Heading>
      <Button
        onPress={() => alert('Indo...')}
        w="80"
        h="20"
        bg="primary.200"
        rounded="md"
        shadow={3}>
        <Heading fontSize="3xl">Pulseira</Heading>
      </Button>
      <Button w="80" h="20" bg="primary.200" rounded="md" shadow={3}>
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
