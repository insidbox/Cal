import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Keyb from './Src/Templ/Keyb';
import Color from './Src/Assets/Color';
import Provider from './Src/Context/Provider';
import Index from './Index';
export default function App() {
  return (
 
      <Provider>
       <Index/>
      </Provider>
      

 
  )
}



const styles = StyleSheet.create({

});


