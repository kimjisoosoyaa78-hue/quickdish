import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LOGO } from '../theme';
import { useCart } from '../cart';

export const Header = ({ titulo, back, go }) => {
  const { count } = useCart();
  return (
    <View style={s.row}>
      {back ? (
        <TouchableOpacity onPress={() => go(back)}><Text style={s.back}>‹</Text></TouchableOpacity>
      ) : (
        <Image source={{ uri: LOGO }} style={s.logo} />
      )}
      <Text style={s.t}>{titulo}</Text>
      <TouchableOpacity onPress={() => go('carrito')}>
        <Text style={{ fontSize: 28 }}>🛍</Text>
        {count > 0 && <View style={s.badge}><Text style={s.bt}>{count}</Text></View>}
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  back: { fontSize: 38, fontWeight: '700', width: 40, marginTop: -6 },
  logo: { width: 40, height: 40, borderRadius: 8, marginRight: 10 },
  t: { flex: 1, fontSize: 24, fontWeight: '800' },
  badge: { position: 'absolute', right: -8, top: -6, backgroundColor: '#f22d2d', borderRadius: 10, minWidth: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  bt: { color: '#fff', fontSize: 11, fontWeight: '800' },
});
