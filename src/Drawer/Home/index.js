import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'

import { Container, Localization, AreaIcon } from './styled'

import HeaderContainer from '../../components/Header'

export default function Home({navigation}) {
  return (
    <Container>
      <HeaderContainer />
      <Localization>
        <AreaIcon onPress={() => {}}>
          <Icon name="map-pin" color="#000" size={14} />
          <Text> Informe seu CEP</Text>
        </AreaIcon>
      </Localization>       
    </Container>
  );
}
