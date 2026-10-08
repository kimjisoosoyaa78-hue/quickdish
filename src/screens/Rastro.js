import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { Logo } from '../components/Logo';
import { BottomNav } from '../components/BottomNav';

const Mapa = () => (
  <View style={st.map}>
    <View style={[st.abs, { left: 20, top: 0, bottom: 0, width: 14, backgroundColor: '#fbb040' }]} />
    <View style={[st.abs, { left: 0, right: 0, top: 70, height: 14, backgroundColor: '#fbb040' }]} />
    <View style={[st.abs, { left: 70, top: 6, width: 24, height: 42, borderRadius: 4, backgroundColor: '#43b843' }]} />
    <View style={[st.abs, { right: 0, bottom: 0, width: 120, height: 70, borderTopLeftRadius: 80, backgroundColor: '#aee0ec' }]} />
    <View style={[st.abs, { right: 0, bottom: 0, width: 50, height: 22, borderTopLeftRadius: 30, backgroundColor: '#43b843' }]} />
    {[[150, 20], [120, 55], [128, 60], [180, 70], [30, 80], [50, 82], [75, 100]].map(([x, y], i) => (
      <View key={i} style={[st.abs, { left: x, top: y, width: 8, height: 8, borderRadius: 4, backgroundColor: '#f04e37' }]} />
    ))}
    <Text style={[st.abs, { left: 14, top: 98, fontSize: 26, color: '#f04e37' }]}>▲</Text>
  </View>
);

export const Rastro = ({ go }) => (
  <LinearGradient colors={['#a8a8fa', '#c8f8ee']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 22, paddingBottom: 110 }}>
      <View style={[st.row, { justifyContent: 'space-between' }]}>
        <Logo size={42} />
        <Text style={{ fontSize: 22 }}>👤  🛍</Text>
      </View>
      <Text style={st.rt}>Rastrear Pedido</Text>
      <Mapa />
      <View style={st.mapF}>
        <Text style={{ fontSize: 8, fontWeight: '800' }}>RASTREA TU PEDIDO EN VIVO</Text>
        <View style={[st.row, { justifyContent: 'space-between' }]}>
          <Text style={{ fontSize: 8, width: 90 }}>El domiciliario esta en camino a tu domicilio</Text>
          <Text style={st.mapB}>Abrir mapa</Text>
        </View>
      </View>
      <View style={st.grid}>
        <View style={{ width: '47%' }}>
          <TouchableOpacity style={st.tile}><Text style={st.te}>📦</Text><Text style={st.tt}>Agregar productos</Text></TouchableOpacity>
          <TouchableOpacity style={[st.tile, { marginTop: 18 }]}><Text style={st.te}>🛵</Text><Text style={st.tt}>Chatear con domiciliario</Text></TouchableOpacity>
          <TouchableOpacity style={st.cancel}><Text style={{ color: '#fff', fontSize: 11, letterSpacing: 1 }}>CANCELAR PEDIDO</Text></TouchableOpacity>
        </View>
        <View style={{ width: '47%', marginTop: 40 }}>
          <TouchableOpacity style={st.tile} onPress={() => go('estado')}><Text style={st.tt}>Pedido</Text><Text style={st.te}>🍕</Text></TouchableOpacity>
          <TouchableOpacity style={[st.tile, { marginTop: 18 }]}><Text style={[st.te, { fontSize: 20, color: '#006491', fontWeight: '800' }]}>Domino's</Text><Text style={st.tt}>Chatear con restaurante</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    <BottomNav go={go} active="Pedidos" />
  </LinearGradient>
);
