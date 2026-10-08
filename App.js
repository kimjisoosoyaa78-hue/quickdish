import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Login } from './src/screens/Login';
import { Registro } from './src/screens/Registro';
import { Recuperar } from './src/screens/Recuperar';
import { Perfil } from './src/screens/Perfil';
import { Estado } from './src/screens/Estado';
import { Rastro } from './src/screens/Rastro';

export default function App() {
  const [s, go] = useState('login');
  const P = { go };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      {s === 'login' && <Login {...P} />}
      {s === 'reg' && <Registro {...P} />}
      {s === 'rec' && <Recuperar {...P} />}
      {s === 'perfil' && <Perfil {...P} />}
      {s === 'estado' && <Estado {...P} />}
      {s === 'rastro' && <Rastro {...P} />}
    </View>
  );
}

/* ---------- Estilos ---------- */
