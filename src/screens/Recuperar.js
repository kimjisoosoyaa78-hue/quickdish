import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { Logo } from '../components/Logo';
import { Field } from '../components/Field';
import { Grad } from '../components/Grad';

export const Recuperar = ({ go }) => (
  <Grad>
    <Logo center />
    <Text style={[st.h1, { fontSize: 28 }]}>Recuperar Contraseña</Text>
    <Text style={st.sub}>Recuperemos tu cuenta</Text>
    <Field label="Email o celular" kb="email-address" />
    <Field label="Usuario" />
    <Text style={st.lab}>Captcha</Text>
    <View style={[st.pill, { flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }]}>
      <Text style={st.cap}>0000</Text>
    </View>
    <Text style={{ color: '#fff', marginVertical: 8 }}>☐  I am Human</Text>
    <TouchableOpacity style={[st.btn, { backgroundColor: '#fff' }]}><Text style={[st.bt1, { color: '#000', fontSize: 18 }]}>ENVIAR CODIGO</Text></TouchableOpacity>
    <View style={[st.row, { marginTop: 18, gap: 12 }]}>
      <View style={[st.alt, { marginRight: 10 }]}><Text style={st.altT}>📞  CELULAR</Text></View>
      <View style={st.alt}><Text style={st.altT}>✉  EMAIL</Text></View>
    </View>
    <TouchableOpacity onPress={() => go('reg')}><Text style={st.lk}>¿No tienes cuenta? <Text style={{ fontWeight: '800' }}>Registrarse</Text></Text></TouchableOpacity>
  </Grad>
);
