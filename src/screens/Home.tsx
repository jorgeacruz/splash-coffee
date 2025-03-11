import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { preventAutoHideAsync } from 'expo-splash-screen';

// previne a splashscreen feche automaticamente
preventAutoHideAsync();

export function Home() {

    //background
    const image = require('../images/coffee.jpg');
    const video = require('../videos/ballet.mp4');

  return (
    <ImageBackground source={image} style={styles.container}>
        <StatusBar translucent/>
        <View style={styles.body}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
        </View>
            <View style={styles.box}>
                <Text style={styles.titleCad}>Faça seu Cadastro</Text> 
                <TextInput 
                    style={styles.input} 
                    placeholder='Digite seu nome' 
                    placeholderTextColor='#fff'
                />   
                <TextInput 
                    style={styles.input} 
                    placeholder='Digite seu email' 
                    placeholderTextColor='#fff' 
                    autoCapitalize='none'
                />   
                <TextInput 
                    style={styles.input} 
                    placeholder='Digite seu senha' 
                    placeholderTextColor='#fff' 
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cadastrado com sucesso')}>
                    <Text>Fazer Cadastro</Text>
                </TouchableOpacity>   
            <Text style={{color:'#fff', fontWeight:'700', paddingVertical:40, fontSize:23}}>Intenso, Sedutor, Puro Prazer</Text>
            </View>
    </ImageBackground>
  );
}

