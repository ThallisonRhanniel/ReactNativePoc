import * as React from 'react';
import {
  Button,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraView from './src/screens/Camera/camera.view';
import HomeView from './src/screens/Home/home.view';
import NetView from './src/screens/NetInfo/net.view';
import GpsView from './src/screens/GPS/gps.view';
import PickFileView from './src/screens/PickFile/pickfile.view';

const {Navigator, Screen} = createNativeStackNavigator();

import {useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeNavigator = () => (
  <Navigator>
    <Screen
      name="Home"
      component={HomeView}
      options={{
        title: 'Tela Inicial',
        navigationBarColor: '#2b9682',
        headerTintColor: '#781111',
        statusBarColor: '#2c0556',
        headerRight: () => (
          <Button
            onPress={() => console.log('oi')}
            title="Info"
            color="#050435"
          />
        ),
      }}
    />
    <Screen
      name="CameraView"
      component={CameraView}
      options={{title: 'Tela de Camera'}}
    />
    <Screen
      name="NetView"
      component={NetView}
      options={{title: 'Tela de Status Net'}}
    />
    <Screen
      name="GpsView"
      component={GpsView}
      options={{title: 'Tela de GPS'}}
    />
    <Screen
      name="PickFileView"
      component={PickFileView}
      options={{title: 'Tela de pegar arquivos'}}
    />
  </Navigator>
);

//Tema personalizado
//https://reactnavigation.org/docs/themes/

export const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <HomeNavigator />
    </NavigationContainer>
  );
};