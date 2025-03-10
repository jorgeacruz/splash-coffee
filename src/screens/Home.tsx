import { StyleSheet, Text, View, Image } from 'react-native';

export function Home() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../../assets/splash.png')} style={{width:'100%', height:'100%'}}/>
    </View>
  );
}

