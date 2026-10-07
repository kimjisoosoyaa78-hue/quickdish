import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Pale } from '../components/Pale';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { RESTAURANTES, cop } from '../data';

export const Restaurantes = ({ go }) => (
  <View style={{ flex: 1 }}>
    <Pale bottom={110}>
      <Header titulo="Restaurantes" go={go} />
      <Text style={s.sub}>Elige dónde quieres pedir</Text>
      {RESTAURANTES.map((r) => (
        <TouchableOpacity key={r.id} style={s.card} onPress={() => go('menu', r.id)}>
          <View style={[s.ic, { backgroundColor: r.color }]}><Text style={{ fontSize: 30 }}>{r.icono}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={s.n}>{r.nombre}</Text>
            <Text style={s.d}>{r.tipo}</Text>
            <Text style={s.d}>⏱ {r.tiempo} · Desde {cop(Math.min(...r.menu.map((m) => m.precio)))}</Text>
          </View>
          <Text style={s.go}>›</Text>
        </TouchableOpacity>
      ))}
    </Pale>
    <BottomNav go={go} active="Restaurantes" />
  </View>
);

const s = StyleSheet.create({
  sub: { fontSize: 15, marginBottom: 16 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20, padding: 14, marginBottom: 14, elevation: 2 },
  ic: { width: 62, height: 62, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  n: { fontSize: 18, fontWeight: '800' },
  d: { fontSize: 12, color: '#555', marginTop: 2 },
  go: { fontSize: 32, color: '#999' },
});
