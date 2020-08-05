import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setUser({ username: username.toLowerCase(), password });
  };
  return (
    <SafeAreaView>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        mainLabel="Username"
      />
      <FloatLabelInput
        value={password}
        setValue={setPassword}
        mainLabel="Password"
        secureTextEntry={true}
      />
      <AppButton onPress={handleSubmit}>Login</AppButton>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});