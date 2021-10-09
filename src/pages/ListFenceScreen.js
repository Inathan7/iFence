import React from 'react';
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

function ListFence() {
  const data = [
    {
      active: 'Sim',
      name: 'Pulseira de Inathan',
      start: '2021-05-20 00:00:00.0',
      end: '2021-05-21 00:00:00.0',
      lat: '-6.14545',
      long: '-30.20483',
      ray: '20.0',
    },
    {
      active: 'Sim',
      name: 'Pulseira de Elenilson',
      start: '2021-05-20 00:00:00.0',
      end: '2021-05-21 00:00:00.0',
      lat: '-6.14545',
      long: '-30.20483',
      ray: '20.0',
    },
    {
      active: 'Sim',
      name: 'Pulseira de Victor',
      start: '2021-05-20 00:00:00.0',
      end: '2021-05-21 00:00:00.0',
      lat: '-6.14545',
      long: '-30.20483',
      ray: '20.0',
    },
  ];
  return (
    <Box
      w={{
        base: '100%',
        md: '25%',
      }}>
      <Heading fontSize="3xl" mt="10" textAlign="center" mb="10">
        Lista de Cercas Geográficas Digitais
      </Heading>
      <FlatList
        data={data}
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
                  Ativa: {item.active}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Inicício: {item.start}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Final: {item.end}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Latitude: {item.lat}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Longitude: {item.long}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Raio: {item.ray}
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
                  <Menu.Item>Deletar</Menu.Item>
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

export default function ListFenceScreen() {
  return (
    <NativeBaseProvider>
      <Center>
        <ListFence />
      </Center>
    </NativeBaseProvider>
  );
}
