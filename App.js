import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LOGO = 'data:image/jpeg;base64,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';
const PG = ['#8b4fff', '#00c060'];
const TOP = Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 10 : 54;

/* ---------- Componentes reutilizables ---------- */
const Logo = ({ size = 44, color = '#fff', center }) => (
  <View style={[st.row, center && { justifyContent: 'center' }]}>
    <Image source={{ uri: LOGO }} style={{ width: size, height: size, borderRadius: 8 }} />
    <Text style={{ color, fontSize: size * 0.5, fontWeight: '700', marginLeft: 10 }}>QuickDish</Text>
  </View>
);

const Field = ({ label, secure, kb }) => {
  const [hide, setHide] = useState(!!secure);
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={st.lab}>{label}</Text>
      <View>
        <TextInput style={st.pill} secureTextEntry={hide} keyboardType={kb || 'default'} autoCapitalize="none" />
        {secure && (
          <TouchableOpacity style={st.eye} onPress={() => setHide(!hide)}>
            <Text style={{ fontSize: 20 }}>{hide ? '🙈' : '👁'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Grad = ({ children }) => (
  <LinearGradient colors={PG} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 24, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
    <Text style={st.pw}>▙LJD  Powered By</Text>
  </LinearGradient>
);

const BottomNav = ({ go, active }) => (
  <View style={st.bnav}>
    {[['Home', 'login'], ['Restaurantes', 'perfil'], ['Pedidos', 'rastro'], ['Contacto', 'perfil']].map(([t, to]) => (
      <TouchableOpacity key={t} onPress={() => go(to)}>
        <Text style={[st.bt, active === t && { fontWeight: '800' }]}>{t}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

/* ---------- Pantallas ---------- */
const Login = ({ go }) => (
  <Grad>
    <Logo center />
    <Text style={st.h1}>¡Hola!{'\n'}¡Bienvenido!</Text>
    <Text style={st.sub}>Accedamos a tu cuenta</Text>
    <Field label="Email o celular" kb="email-address" />
    <Field label="Contraseña" secure />
    <TouchableOpacity style={[st.btn, { backgroundColor: '#f4620a', alignSelf: 'center', paddingHorizontal: 40 }]} onPress={() => go('perfil')}>
      <Text style={st.bt1}>Iniciar Sesión</Text>
    </TouchableOpacity>
    <Text style={st.lk}>¿No tiene cuenta?</Text>
    <TouchableOpacity onPress={() => go('reg')}><Text style={[st.lk, st.u]}>REGISTRARSE</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => go('rec')}><Text style={st.lk}>Olvide mi contraseña</Text></TouchableOpacity>
    <Text style={[st.lk, st.u]}>REGISTRARSE COMO RESTAURANTE</Text>
  </Grad>
);

const Registro = ({ go }) => (
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

const Recuperar = ({ go }) => (
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

const UField = ({ label, v }) => (
  <View style={{ marginBottom: 6 }}>
    <Text style={st.ulab}>{label}</Text>
    <TextInput style={st.ul} defaultValue={v} placeholder="" />
  </View>
);

const Perfil = ({ go }) => (
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

const PASOS = ['Pedido recibido', 'Preparando', 'Lista para recoger', 'Completado'];
const ICONOS = ['✔', '👨‍🍳', '🔔', '✔'];

const Estado = ({ go }) => {
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

const Rastro = ({ go }) => (
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

/* ---------- App ---------- */
export default function App() {
  const [s, go] = useState('login');
  const P = { go };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      {s === 'login' && <Login {...P} />}
      {s === 'reg' && <Registro {...P} />}
      {s === 'rec' && <Recuperar {...P} />}
      {s === 'perfil' && <Perfil {...P} />}
      {s === 'estado' && <Estado {...P} />}
      {s === 'rastro' && <Rastro {...P} />}
    </View>
  );
}

/* ---------- Estilos ---------- */
const st = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  abs: { position: 'absolute' },
  h1: { color: '#fff', fontSize: 34, fontWeight: '700', textAlign: 'center', marginTop: 22, lineHeight: 40 },
  sub: { color: '#fff', textAlign: 'center', fontSize: 15, marginTop: 8, marginBottom: 22 },
  lab: { color: '#fff', fontSize: 13, letterSpacing: 1, marginLeft: 8, marginBottom: 5 },
  pill: { backgroundColor: '#fff', borderRadius: 30, height: 56, paddingHorizontal: 22, fontSize: 16 },
  eye: { position: 'absolute', right: 18, top: 16 },
  btn: { borderRadius: 30, paddingVertical: 16, alignItems: 'center', marginTop: 6 },
  bt1: { color: '#fff', fontWeight: '700', fontSize: 20 },
  lk: { color: '#fff', textAlign: 'center', marginTop: 14, fontSize: 15 },
  u: { textDecorationLine: 'underline' },
  pw: { position: 'absolute', left: 14, bottom: 8, color: '#222', fontSize: 11, fontWeight: '700' },
  cap: { backgroundColor: '#000', color: '#fff', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, fontSize: 18, overflow: 'hidden' },
  alt: { flex: 1, backgroundColor: '#fff', borderRadius: 30, paddingVertical: 14, alignItems: 'center' },
  altT: { fontWeight: '700', fontSize: 12 },
  search: { flex: 1, backgroundColor: '#fff', borderRadius: 14, padding: 14, marginHorizontal: 10, elevation: 2 },
  bell: { backgroundColor: '#1fbfa5', width: 52, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  save: { textAlign: 'right', color: '#999', fontWeight: '700', fontSize: 15, marginVertical: 14 },
  ulab: { fontWeight: '700', fontSize: 16, marginTop: 10 },
  ul: { borderBottomWidth: 2, borderBottomColor: '#111', height: 40, fontSize: 15 },
  sec: { fontWeight: '800', fontSize: 17, marginTop: 24, marginBottom: 12 },
  dir: { borderWidth: 2, borderColor: '#bbb', borderRadius: 26, paddingVertical: 12, paddingHorizontal: 22, marginBottom: 12 },
  dirT: { fontSize: 14, textTransform: 'uppercase' },
  rest: { fontWeight: '900', fontSize: 20, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8 },
  cup: { flex: 1, borderWidth: 2, borderColor: '#bbb', borderRadius: 18, padding: 8, marginRight: 6, minHeight: 80, justifyContent: 'center' },
  cupT: { fontSize: 10, textAlign: 'center' },
  bnav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, backgroundColor: 'rgba(255,255,255,0.92)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  bt: { fontSize: 15, color: '#111' },
  eh: { color: '#111', fontWeight: '800', fontSize: 18, marginTop: 34, marginBottom: 18 },
  ep: { fontSize: 16, marginBottom: 18, color: '#111' },
  dot: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginLeft: 40 },
  pt: { fontSize: 17, color: '#111' },
  line: { position: 'absolute', left: 56, top: 38, width: 4, height: 58, backgroundColor: '#111' },
  rt: { textAlign: 'center', fontSize: 22, fontWeight: '800', marginVertical: 14 },
  map: { height: 150, backgroundColor: '#d6d2cd', borderTopLeftRadius: 14, borderTopRightRadius: 14, overflow: 'hidden' },
  mapF: { backgroundColor: '#fff', padding: 8, borderBottomLeftRadius: 14, borderBottomRightRadius: 14 },
  mapB: { backgroundColor: '#e26b6b', color: '#fff', fontSize: 11, paddingHorizontal: 18, paddingVertical: 6, borderRadius: 20, overflow: 'hidden' },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  tile: { backgroundColor: '#fff', borderRadius: 18, minHeight: 118, alignItems: 'center', justifyContent: 'center', padding: 8 },
  te: { fontSize: 40 },
  tt: { fontWeight: '800', fontSize: 12, textAlign: 'center', marginTop: 4 },
  cancel: { backgroundColor: '#f22d2d', borderRadius: 12, alignItems: 'center', paddingVertical: 14, marginTop: 20 },
});
