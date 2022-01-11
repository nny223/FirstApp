import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, Image } from 'react-native';
import Styles from './common-styles';
import CommonLayouts from './common-layouts'
import TextInputDemo  from './text-input-demo';
import SwitchDemo from './switch-demo';
import ImageDemo from './image-demo';
const imgLogo = require('./assets/favicon.png')

export default function App() {
  const onPressButton1 = () => {
      Alert.alert('สวัสดีชาวโลก !')
      
  }
  return ( 
      <View style = {styles.container} >
          <Text style = {styles.textColor }>Welcome to FirstApp</Text>
          {/*<Button title="คลิกที่นี่" onPress={onPressButton1}></Button>*/}
          <Image source={imgLogo} style={styles.imgLogo} />
          <TextInput style = {styles.input} placeholder="กรุณากรอกชื่อ"></TextInput>
          <TextInput style = {styles.input}placeholder="กรุณากรอกรหัสนักเรียน" keyboardType=''></TextInput>
            
           {/* <SwitchDemo />*/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffd700',
      alignItems: 'center',
      justifyContent: 'center',
  },  
  textColor: {
    fontSize:30,
      color: '#000000',
      alignItems: 'center',
  },
  imgLogo: { width: 140, height: 140, 
  },

  input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
  },
});
/*
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
*/
