import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Drawer/Home';
import Profile from './Drawer/Profile';
import Categoria from './Drawer/Categorias'
import Favorites from './Drawer/Favorites'
import Pedidos from './Drawer/Pedido'
import Notification from './Drawer/Notification'
import Messager from './Drawer/menssager';
import Desconto from './Drawer/Desconto'

const Drawer = createDrawerNavigator();

function Menu (props) {
  return(
    <Drawer.Navigator 
    drawerStyle={{
      backgroundColor: '#878787',
      width: 200,
      height: 600,
      marginTop: 70,
      borderTopRightRadius:30,
      borderBottomRightRadius:30
    }}
    >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Profile" component={Profile}/>
      <Drawer.Screen name="Categoria" component={Categoria}/>
      <Drawer.Screen name="Favorites" component={Favorites}/>
      <Drawer.Screen name="Pedidos" component={Pedidos}/>
      <Drawer.Screen name="Notification" component={Notification}/>
      <Drawer.Screen name="Messager" component={Messager}/>
      <Drawer.Screen name="Desconto" component={Desconto}/>
    </Drawer.Navigator>
  );
}

export default Menu;