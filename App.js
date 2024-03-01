import React from 'react';
import { AppRegistry } from 'react-native';
import SenhaScreen from '../Gera-Senha/src/screens/SenhaScreens'; // Importe o componente SenhaScreen

const App = () => {
  return <SenhaScreen />;
};

AppRegistry.registerComponent('Gera-Senha', () => App);
