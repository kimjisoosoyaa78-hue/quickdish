import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { CartProvider } from './src/cart';
import { Login } from './src/screens/Login';
import { Registro } from './src/screens/Registro';
import { Recuperar } from './src/screens/Recuperar';
import { Perfil } from './src/screens/Perfil';
import { Estado } from './src/screens/Estado';
import { Rastro } from './src/screens/Rastro';
import { Restaurantes } from './src/screens/Restaurantes';
import { Menu } from './src/screens/Menu';
import { Carrito } from './src/screens/Carrito';
import { Pago } from './src/screens/Pago';

export default function App() {
  const [s, setS] = useState('login');
  const [param, setParam] = useState(null);
  const go = (pantalla, p) => { if (p !== undefined) setParam(p); setS(pantalla); };
  const P = { go, param };
  return (
    <CartProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        {s === 'login' && <Login {...P} />}
        {s === 'reg' && <Registro {...P} />}
        {s === 'rec' && <Recuperar {...P} />}
        {s === 'perfil' && <Perfil {...P} />}
        {s === 'estado' && <Estado {...P} />}
        {s === 'rastro' && <Rastro {...P} />}
        {s === 'restaurantes' && <Restaurantes {...P} />}
        {s === 'menu' && <Menu {...P} />}
        {s === 'carrito' && <Carrito {...P} />}
        {s === 'pago' && <Pago {...P} />}
      </View>
    </CartProvider>
  );
}
