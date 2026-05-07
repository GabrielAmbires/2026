import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
      setErro('');
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={estilos.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={estilos.page}>
        <View style={estilos.card}>
          <Text style={estilos.title}>Login</Text>

          <View style={estilos.field}>
            <Text style={estilos.label}>Email</Text>
            <TextInput
              style={estilos.input}
              placeholder="seu@email.com"
              placeholderTextColor="#9f9f9f"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={estilos.field}>
            <Text style={estilos.label}>Senha</Text>
            <TextInput
              style={estilos.input}
              placeholder="••••••••"
              placeholderTextColor="#9f9f9f"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <Pressable style={estilos.primaryButton} onPress={fazerLogin}>
            <Text style={estilos.primaryButtonText}>ENTRAR</Text>
          </Pressable>

          <Pressable
            style={estilos.secondaryButton}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={estilos.secondaryButtonText}>Criar conta</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    color: '#333333',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    color: '#333333',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  primaryButton: {
    marginTop: 10,
    backgroundColor: '#ff6b9d',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  secondaryButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#ff6b9d',
    fontSize: 14,
    fontWeight: '600',
  },
  erro: {
    color: '#ff4757',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});
