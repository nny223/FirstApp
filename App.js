import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextnameEng}>Mr.nonthanan Simpree</Text>
      <Text style={styles.Textnamethai}>นายนนทนันท์ สิมปรี</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextnameEng: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#FFD700',
    
  },
  Textnamethai: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ffffff',
  },
});
