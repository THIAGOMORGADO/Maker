import React from 'react';
import { View, Text } from 'react-native';
import {DrawerView} from '@react-navigation/drawer'
export default function ContentDrawer({...props}) {
 return (
   <View>
     <DrawerView>
     <Text>Ola</Text>
     </DrawerView>
     
   </View>
  );
}