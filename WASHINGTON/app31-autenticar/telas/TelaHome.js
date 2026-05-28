import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaHome() {
  const fazerLogout = () => {
    signOut(autenticacao);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Bem-vindo,</Text>
      <Text style={estilos.email}>{autenticacao.currentUser?.email}</Text>
      <View style={estilos.buttonWrapper}>
        <Button title="Sair" onPress={fazerLogout} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333333',
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
    color: '#555555',
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 300,
  },
});