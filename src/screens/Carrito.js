import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Pale } from '../components/Pale';
import { Header } from '../components/Header';
import { cop } from '../data';
import { useCart } from '../cart';

export const Carrito = ({ go }) => {
  const { rest, list, subtotal, envio, total, add, remove } = useCart();
  if (list.length === 0) {
    return (
      <Pale>
        <Header titulo="Mi carrito" back="restaurantes" go={go} />
        <View style={{ alignItems: 'center', marginTop: 80 }}>
          <Text style={{ fontSize: 70 }}>🛍</Text>
          <Text style={s.vac}>Tu carrito está vacío</Text>
          <TouchableOpacity style={s.btn} onPress={() => go('restaurantes')}><Text style={s.btnT}>Ver restaurantes</Text></TouchableOpacity>
        </View>
      </Pale>
    );
  }
  return (
    <Pale>
      <Header titulo="Mi carrito" back="menu" go={go} />
      <Text style={s.rest}>Pedido en {rest.nombre}</Text>
      {list.map(({ p, q }) => (
        <View key={p.id} style={s.item}>
          <Text style={{ fontSize: 30, marginRight: 10 }}>{p.icono}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.n}>{p.nombre}</Text>
            <Text style={s.p}>{cop(p.precio * q)}</Text>
          </View>
          <View style={s.ctr}>
            <TouchableOpacity style={s.cb} onPress={() => remove(p)}><Text style={s.cbt}>−</Text></TouchableOpacity>
            <Text style={s.q}>{q}</Text>
            <TouchableOpacity style={s.cb} onPress={() => add(rest, p)}><Text style={s.cbt}>+</Text></TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={s.box}>
        <Text style={s.h}>Dirección de entrega</Text>
        <Text style={s.a}>🏠 CASA · Calle 20 # 13E - 44 / barrio candelaria</Text>
      </View>
      <View style={s.box}>
        <View style={s.line}><Text>Subtotal</Text><Text>{cop(subtotal)}</Text></View>
        <View style={s.line}><Text>Envío</Text><Text>{envio === 0 ? 'Gratis' : cop(envio)}</Text></View>
        {envio > 0 && <Text style={s.hint}>Envío gratis en compras desde $20.000</Text>}
        <View style={[s.line, { marginTop: 8 }]}><Text style={s.tot}>Total</Text><Text style={s.tot}>{cop(total)}</Text></View>
      </View>
      <TouchableOpacity style={s.btn} onPress={() => go('pago')}><Text style={s.btnT}>Ir a pagar</Text></TouchableOpacity>
    </Pale>
  );
};

const s = StyleSheet.create({
  vac: { fontSize: 18, fontWeight: '700', marginVertical: 14 },
  rest: { fontSize: 16, fontWeight: '800', marginBottom: 12 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 18, padding: 12, marginBottom: 10 },
  n: { fontSize: 14, fontWeight: '700' },
  p: { fontSize: 14, color: '#1fbfa5', fontWeight: '800', marginTop: 3 },
  ctr: { flexDirection: 'row', alignItems: 'center' },
  cb: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#1fbfa5', alignItems: 'center', justifyContent: 'center' },
  cbt: { color: '#fff', fontSize: 20, fontWeight: '800', marginTop: -2 },
  q: { width: 28, textAlign: 'center', fontWeight: '800' },
  box: { backgroundColor: '#fff', borderRadius: 18, padding: 16, marginTop: 8, marginBottom: 6 },
  h: { fontWeight: '800', marginBottom: 6 },
  a: { fontSize: 13 },
  line: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 },
  hint: { fontSize: 11, color: '#777' },
  tot: { fontSize: 18, fontWeight: '800' },
  btn: { backgroundColor: '#f4620a', borderRadius: 30, paddingVertical: 16, alignItems: 'center', marginTop: 16, paddingHorizontal: 30 },
  btnT: { color: '#fff', fontWeight: '800', fontSize: 18 },
});
