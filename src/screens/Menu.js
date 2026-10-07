import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Pale } from '../components/Pale';
import { Header } from '../components/Header';
import { RESTAURANTES, cop } from '../data';
import { useCart } from '../cart';

export const Menu = ({ go, param }) => {
  const r = RESTAURANTES.find((x) => x.id === param) || RESTAURANTES[0];
  const { add, remove, qty, count, subtotal } = useCart();
  return (
    <View style={{ flex: 1 }}>
      <Pale bottom={count > 0 ? 120 : 40}>
        <Header titulo={r.nombre} back="restaurantes" go={go} />
        <View style={[s.banner, { backgroundColor: r.color }]}>
          <Text style={{ fontSize: 44 }}>{r.icono}</Text>
          <Text style={s.bt}>{r.tipo} · ⏱ {r.tiempo}</Text>
        </View>
        <Text style={s.sec}>Menú</Text>
        {r.menu.map((p) => {
          const q = qty(p.id);
          return (
            <View key={p.id} style={s.item}>
              <Text style={{ fontSize: 36, marginRight: 12 }}>{p.icono}</Text>
              <View style={{ flex: 1 }}>
                <Text style={s.n}>{p.nombre}</Text>
                <Text style={s.p}>{cop(p.precio)}</Text>
              </View>
              {q === 0 ? (
                <TouchableOpacity style={s.add} onPress={() => add(r, p)}><Text style={s.addT}>Agregar</Text></TouchableOpacity>
              ) : (
                <View style={s.ctr}>
                  <TouchableOpacity style={s.cb} onPress={() => remove(p)}><Text style={s.cbt}>−</Text></TouchableOpacity>
                  <Text style={s.q}>{q}</Text>
                  <TouchableOpacity style={s.cb} onPress={() => add(r, p)}><Text style={s.cbt}>+</Text></TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </Pale>
      {count > 0 && (
        <TouchableOpacity style={s.bar} onPress={() => go('carrito')}>
          <Text style={s.barT}>Ver carrito ({count})</Text>
          <Text style={s.barT}>{cop(subtotal)}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  banner: { borderRadius: 20, padding: 18, alignItems: 'center', marginBottom: 14 },
  bt: { color: '#fff', fontWeight: '700', marginTop: 6 },
  sec: { fontSize: 18, fontWeight: '800', marginVertical: 8 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 18, padding: 12, marginBottom: 12 },
  n: { fontSize: 14, fontWeight: '700' },
  p: { fontSize: 14, color: '#1fbfa5', fontWeight: '800', marginTop: 3 },
  add: { backgroundColor: '#f4620a', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8 },
  addT: { color: '#fff', fontWeight: '700', fontSize: 13 },
  ctr: { flexDirection: 'row', alignItems: 'center' },
  cb: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#1fbfa5', alignItems: 'center', justifyContent: 'center' },
  cbt: { color: '#fff', fontSize: 20, fontWeight: '800', marginTop: -2 },
  q: { width: 30, textAlign: 'center', fontWeight: '800', fontSize: 16 },
  bar: { position: 'absolute', left: 20, right: 20, bottom: 24, backgroundColor: '#f4620a', borderRadius: 30, paddingVertical: 16, paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', elevation: 6 },
  barT: { color: '#fff', fontWeight: '800', fontSize: 16 },
});
