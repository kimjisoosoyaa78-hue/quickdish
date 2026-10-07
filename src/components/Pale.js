import React from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TOP } from '../theme';

export const Pale = ({ children, bottom = 40 }) => (
  <LinearGradient colors={['#a8a8fa', '#c8f8ee']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 20, paddingBottom: bottom }} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  </LinearGradient>
);
