import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Pale } from '../components/Pale';
import { Header } from '../components/Header';
import { cop } from '../data';
import { useCart } from '../cart';

const METODOS = [
  { id: 'credito', t: '💳 Tarjeta de crédito' },
  { id: 'debito', t: '💳 Tarjeta débito' },
  { id: 'nequi', t: '📱 Nequi' },
  { id: 'daviplata', t: '📱 Daviplata' },
  { id: 'pse', t: '🏦 PSE (transferencia bancaria)' },
  { id: 'efectivo', t: '💵 Efectivo contra entrega' },
];

export const Pago = ({ go }) => {
  const { rest, total, clear } = useCart();
  const [m, setM] = useState('credito');
  const [num, setNum] = useState('');
  const [nom, setNom] = useState('');
  const [ven, setVen] = useState('');
  const [cvv, setCvv] = useState('');
  const [cel, setCel] = useState('');
  const [ok, setOk] = useState(null);

  const esTarjeta = m === 'credito' || m === 'debito';
  const fmtNum = (t) => t.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const fmtVen = (t) => { const d = t.replace(/\D/g, '').slice(0, 4); return d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d; };

  const pagar = () => {
    if (esTarjeta) {
      if (num.replace(/\s/g, '').length < 15) return Alert.alert('Revisa la tarjeta', 'El número de la tarjeta está incompleto.');
      if (nom.trim().length < 3) return Alert.alert('Revisa la tarjeta', 'Escribe el nombre como aparece en la tarjeta.');
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(ven)) return Alert.alert('Revisa la tarjeta', 'La fecha debe tener el formato MM/AA.');
      if (cvv.length < 3) return Alert.alert('Revisa la tarjeta', 'El código CVV debe tener 3 o 4 números.');
    }
    if ((m === 'nequi' || m === 'daviplata') && cel.length !== 10) return Alert.alert('Revisa el celular', 'El número debe tener 10 dígitos.');
    const metodo = METODOS.find((x) => x.id === m).t;
    setOk({ orden: String(Math.floor(1000 + Math.random() * 9000)), rest: rest ? rest.nombre : '', total, metodo });
    clear();
  };

  if (ok) {
    return (
      <Pale>
        <View style={{ alignItems: 'center', marginTop: 60 }}>
          <Text style={{ fontSize: 80 }}>✅</Text>
          <Text style={s.big}>¡Pedido confirmado!</Text>
          <View style={s.box}>
            <Text style={s.l}>Orden #{ok.orden}</Text>
            <Text style={s.l}>Restaurante: {ok.rest}</Text>
            <Text style={s.l}>Pago: {ok.metodo}</Text>
            <Text style={[s.l, { fontWeight: '800', fontSize: 18 }]}>Total: {cop(ok.total)}</Text>
          </View>
          <TouchableOpacity style={s.btn} onPress={() => go('rastro')}><Text style={s.btnT}>Rastrear pedido</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => go('restaurantes')}><Text style={s.link}>Volver a restaurantes</Text></TouchableOpacity>
        </View>
      </Pale>
    );
  }

  return (
    <Pale>
      <Header titulo="Pago" back="carrito" go={go} />
      <View style={s.box}>
        <Text style={s.l}>Total a pagar</Text>
        <Text style={s.tot}>{cop(total)}</Text>
      </View>
      <Text style={s.sec}>Método de pago</Text>
      {METODOS.map((x) => (
        <TouchableOpacity key={x.id} style={[s.met, m === x.id && s.metOn]} onPress={() => setM(x.id)}>
          <Text style={s.metT}>{x.t}</Text>
          <Text>{m === x.id ? '◉' : '○'}</Text>
        </TouchableOpacity>
      ))}
      {esTarjeta && (
        <View style={s.box}>
          <Text style={s.lab}>Número de la tarjeta</Text>
          <TextInput style={s.in} value={num} onChangeText={(t) => setNum(fmtNum(t))} keyboardType="number-pad" placeholder="0000 0000 0000 0000" />
          <Text style={s.lab}>Nombre en la tarjeta</Text>
          <TextInput style={s.in} value={nom} onChangeText={setNom} autoCapitalize="characters" placeholder="NOMBRE APELLIDO" />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={s.lab}>Vence (MM/AA)</Text>
              <TextInput style={s.in} value={ven} onChangeText={(t) => setVen(fmtVen(t))} keyboardType="number-pad" placeholder="MM/AA" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.lab}>CVV</Text>
              <TextInput style={s.in} value={cvv} onChangeText={(t) => setCvv(t.replace(/\D/g, '').slice(0, 4))} keyboardType="number-pad" secureTextEntry placeholder="***" />
            </View>
          </View>
        </View>
      )}
      {(m === 'nequi' || m === 'daviplata') && (
        <View style={s.box}>
          <Text style={s.lab}>Número de celular</Text>
          <TextInput style={s.in} value={cel} onChangeText={(t) => setCel(t.replace(/\D/g, '').slice(0, 10))} keyboardType="number-pad" placeholder="3001234567" />
        </View>
      )}
      {m === 'pse' && <View style={s.box}><Text style={s.l}>Al confirmar, te llevaríamos al portal de tu banco para autorizar el pago.</Text></View>}
      {m === 'efectivo' && <View style={s.box}><Text style={s.l}>Pagas en efectivo cuando llegue el domiciliario. Ten el valor lo más exacto posible.</Text></View>}
      <Text style={s.note}>Pago simulado para la práctica: no se cobra nada ni se guardan los datos de la tarjeta.</Text>
      <TouchableOpacity style={s.btn} onPress={pagar}><Text style={s.btnT}>Pagar {cop(total)}</Text></TouchableOpacity>
    </Pale>
  );
};

const s = StyleSheet.create({
  big: { fontSize: 26, fontWeight: '800', marginVertical: 14 },
  box: { backgroundColor: '#fff', borderRadius: 18, padding: 16, marginBottom: 12, alignSelf: 'stretch' },
  l: { fontSize: 14, marginVertical: 2 },
  tot: { fontSize: 30, fontWeight: '800', color: '#f4620a' },
  sec: { fontSize: 17, fontWeight: '800', marginVertical: 8 },
  met: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 16, padding: 14, marginBottom: 8, borderWidth: 2, borderColor: 'transparent' },
  metOn: { borderColor: '#1fbfa5' },
  metT: { fontWeight: '700', fontSize: 14 },
  lab: { fontSize: 12, fontWeight: '700', marginBottom: 4, marginTop: 6 },
  in: { backgroundColor: '#f2f2f2', borderRadius: 12, height: 46, paddingHorizontal: 14, fontSize: 15 },
  note: { fontSize: 11, color: '#444', textAlign: 'center', marginTop: 6 },
  btn: { backgroundColor: '#f4620a', borderRadius: 30, paddingVertical: 16, alignItems: 'center', marginTop: 14, paddingHorizontal: 30 },
  btnT: { color: '#fff', fontWeight: '800', fontSize: 18 },
  link: { marginTop: 16, textDecorationLine: 'underline', fontWeight: '700' },
});
