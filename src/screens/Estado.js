import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';
import { Logo } from '../components/Logo';

const PASOS = ['Pedido recibido', 'Preparando', 'Lista para recoger', 'Completado'];

const ICONOS = ['✔', '👨‍🍳', '🔔', '✔'];

export const Estado = ({ go }) => {
  const [n, setN] = useState(0);
  return (
    <LinearGradient colors={PG} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 30, paddingBottom: 40 }}>
        <View style={[st.row, { justifyContent: 'space-between' }]}>
          <TouchableOpacity onPress={() => go('rastro')}><Text style={{ color: '#fff', fontSize: 26, fontWeight: '800' }}>«‹</Text></TouchableOpacity>
          <Logo size={40} />
        </View>
        <Text style={st.eh}>ESTADO DEL PEDIDO</Text>
        <Text style={st.ep}>Orden #0423</Text>
        <Text style={st.ep}>Mesa #12</Text>
        <Text style={st.ep}>3 Hamburguesas especiales, 2 lasañas</Text>
        <View style={{ marginTop: 26 }}>
          {PASOS.map((p, i) => (
            <View key={p} style={{ height: 96 }}>
              <View style={st.row}>
                <View style={[st.dot, { backgroundColor: i <= n ? '#f4620a' : '#888' }]}><Text style={{ fontSize: 17, color: '#fff' }}>{ICONOS[i]}</Text></View>
                <Text style={[st.pt, { marginLeft: 50, fontWeight: i === n ? '800' : '600' }]}>{p}</Text>
              </View>
              {i < 3 && <View style={st.line} />}
            </View>
          ))}
        </View>
        <TouchableOpacity style={[st.btn, { backgroundColor: '#0096b4', marginTop: 30, paddingVertical: 20 }]} onPress={() => setN(Math.min(n + 1, 3))}>
          <Text style={[st.bt1, { color: '#111', fontSize: 24 }]}>{n >= 3 ? 'Pedido completado' : 'Marcar como listo'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};
