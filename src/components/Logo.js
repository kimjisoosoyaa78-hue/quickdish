import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';

export const Logo = ({ size = 44, color = '#fff', center }) => (
  <View style={[st.row, center && { justifyContent: 'center' }]}>
    <Image source={{ uri: LOGO }} style={{ width: size, height: size, borderRadius: 8 }} />
    <Text style={{ color, fontSize: size * 0.5, fontWeight: '700', marginLeft: 10 }}>QuickDish</Text>
  </View>
);
