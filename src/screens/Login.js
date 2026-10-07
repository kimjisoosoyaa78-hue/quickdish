import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { Logo } from '../components/Logo';
import { Field } from '../components/Field';
import { Grad } from '../components/Grad';

export const Login = ({ go }) => (
  <Grad>
    <Logo center />
    <Text style={st.h1}>¡Hola!{'\n'}¡Bienvenido!</Text>
    <Text style={st.sub}>Accedamos a tu cuenta</Text>
    <Field label="Email o celular" kb="email-address" />
    <Field label="Contraseña" secure />
    <TouchableOpacity style={[st.btn, { backgroundColor: '#f4620a', alignSelf: 'center', paddingHorizontal: 40 }]} onPress={() => go('perfil')}>
      <Text style={st.bt1}>Iniciar Sesión</Text>
    </TouchableOpacity>
    <Text style={st.lk}>¿No tiene cuenta?</Text>
    <TouchableOpacity onPress={() => go('reg')}><Text style={[st.lk, st.u]}>REGISTRARSE</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => go('rec')}><Text style={st.lk}>Olvide mi contraseña</Text></TouchableOpacity>
    <Text style={[st.lk, st.u]}>REGISTRARSE COMO RESTAURANTE</Text>
  </Grad>
);
