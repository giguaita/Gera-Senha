import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SenhaScreen = () => {
  const [senha, setSenha] = useState('');

  const gerarSenha = () => {
    // Lógica para gerar uma senha aleatória de 16 caracteres
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let novaSenha = '';
    for (let i = 0; i < 16; i++) {
      novaSenha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setSenha(novaSenha);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../imagem/cadeado.png')} style={styles.imagem} />
      <Text style={styles.senha}>{senha}</Text>
      <TouchableOpacity style={styles.botao} onPress={gerarSenha}>
        <Text style={styles.textoBotao}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  senha: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});

export default SenhaScreen;
