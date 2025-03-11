import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  { Home } from './src/screens/Home';
import  Splash  from './src/screens/splash';

export default function App() {

  const [splashComplete, setSplashComplete] = useState(false);

  return (
    splashComplete 
    ? <Home/> 
    : <Splash onComplete={setSplashComplete}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
