import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';

export const BottomNav = ({ go, active }) => (
  <View style={st.bnav}>
    {[['Home', 'login'], ['Restaurantes', 'restaurantes'], ['Pedidos', 'rastro'], ['Contacto', 'perfil']].map(([t, to]) => (
      <TouchableOpacity key={t} onPress={() => go(to)}>
        <Text style={[st.bt, active === t && { fontWeight: '800' }]}>{t}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
