import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { BottomNav } from '../components/BottomNav';

const UField = ({ label, v }) => (
  <View style={{ marginBottom: 6 }}>
    <Text style={st.ulab}>{label}</Text>
    <TextInput style={st.ul} defaultValue={v} placeholder="" />
  </View>
);

export const Perfil = ({ go }) => (
  <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
    <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 18, paddingBottom: 100 }}>
      <View style={st.row}>
        <Image source={{ uri: LOGO }} style={{ width: 52, height: 52, borderRadius: 8 }} />
        <View style={st.search}><Text style={{ color: '#888' }}>🔍  Buscar...</Text></View>
        <View style={st.bell}><Text style={{ fontSize: 22 }}>🔔</Text></View>
      </View>
      <Text style={st.save}>GUARDAR CAMBIOS</Text>
      <UField label="Nombre Completo" />
      <UField label="Fecha de nacimiento" v="00/00/0000" />
      <UField label="Identificación" />
      <UField label="Email/Celular" />
      <UField label="Contraseña" />
      <UField label="Confirmar contraseña" />
      <Text style={st.sec}>DIRECCIONES</Text>
      <View style={[st.dir, { backgroundColor: '#1fbfa5', borderWidth: 0 }]}><Text style={[st.dirT, { color: '#fff' }]}>CASA{'\n'}Calle 20 # 13E - 44/barrio candelaria</Text></View>
      <View style={st.dir}><Text style={st.dirT}>TRABAJO{'\n'}Calle 9 # 11A - 5/barrio candelaria</Text></View>
      <View style={st.dir}><Text style={[st.dirT, { textAlign: 'center', fontStyle: 'italic' }]}>AÑADIR DIRECCIÓN</Text></View>
      <Text style={st.sec}>RESTAURANTES DESTACADOS</Text>
      <View style={[st.row, { justifyContent: 'space-between' }]}>
        <Text style={[st.rest, { color: '#d4141c' }]}>KFC</Text>
        <Text style={[st.rest, { backgroundColor: '#e51b24', color: '#ffc72c' }]}>M</Text>
        <Text style={[st.rest, { color: '#e4572e' }]}>BK</Text>
        <Text style={[st.rest, { color: '#1b5eab' }]}>D</Text>
        <Text style={{ fontSize: 34, color: '#777' }}>+</Text>
      </View>
      <Text style={st.sec}>CUPONES</Text>
      <View style={st.row}>
        {[['EMPANADAS BAMBI', '10% DE DESCUENTO', true], ['ITALIANISIMO', '15% DE DESCUENTO'], ['ENVÍO GRATIS', 'COMPRAS MAYORES A 20.000']].map(([a, b, on]) => (
          <View key={a} style={[st.cup, on && { backgroundColor: '#1fbfa5', borderWidth: 0 }]}>
            <Text style={[st.cupT, { fontWeight: '800' }, on && { color: '#fff' }]}>{a}</Text>
            <Text style={[st.cupT, on && { color: '#fff' }]}>{b}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    <BottomNav go={go} active="Restaurantes" />
  </View>
);
