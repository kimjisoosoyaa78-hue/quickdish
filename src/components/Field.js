import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { st } from '../styles';
import { LOGO, PG, TOP } from '../theme';

export const Field = ({ label, secure, kb }) => {
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
