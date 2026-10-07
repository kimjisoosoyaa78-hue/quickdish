import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { Logo } from '../components/Logo';
import { Field } from '../components/Field';
import { Grad } from '../components/Grad';

export const Registro = ({ go }) => (
  <Grad>
    <Logo center />
    <Text style={st.h1}>Crea una{'\n'}cuenta nueva</Text>
    <Text style={st.sub}>Únase hoy a QuickDish</Text>
    <Field label="Nombre Completo" />
    <Field label="Email/Celular" kb="email-address" />
    <Field label="Contraseña" secure />
    <Field label="Fecha de nacimiento" kb="numbers-and-punctuation" />
    <TouchableOpacity style={[st.btn, { backgroundColor: '#00f01a', marginTop: 20 }]} onPress={() => go('login')}>
      <Text style={[st.bt1, { fontSize: 16 }]}>REGISTRARSE</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => go('login')}><Text style={[st.lk, st.u]}>¿Ya tiene una cuenta? Acceder</Text></TouchableOpacity>
  </Grad>
);
