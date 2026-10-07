import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';

export const Grad = ({ children }) => (
  <LinearGradient colors={PG} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 24, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
    <Text style={st.pw}>▙LJD  Powered By</Text>
  </LinearGradient>
);
