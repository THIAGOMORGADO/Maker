import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = styled.View`
  width: 100%;
  height: 20px;
  background: #878787;
`;
const HeaderTopo = styled.View`
  width: 100%;
  background: #000;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const HeaderDir = styled.TouchableOpacity`
  flex:5;
  margin-left: 10px;
`;
const HeaderEsque = styled.View`
  flex:3;
  justify-content: space-around;
  align-items:center;
  flex-direction: row;
`;
const HeaderButton = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
`;
export default () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <HeaderTopo>
        <HeaderDir onPress={() => {navigation.openDrawer();}}>
          <Icon name="menu" color="#fff" size={24} />
        </HeaderDir>
        <HeaderEsque onPress={() => {alert('aaaaa')}}>
          <HeaderButton>
            <Icon name="search" color="#fff" size={24} />
          </HeaderButton>
          <HeaderButton>
            <Icon name="shopping-bag" color="#fff" size={24} />
          </HeaderButton>
        </HeaderEsque>
      </HeaderTopo>
    </>
  );
};
