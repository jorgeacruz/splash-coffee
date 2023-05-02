import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { MotiText, MotiView } from 'moti';

const list = [
  {
    id:1,
    label:'Boleto Pgto',
    value:'549,00',
    date:'02/06/2022',
    type:0 //saida
  },
  {
    id:2,
    label:'Pgto Salario',
    value:'7800,00',
    date:'02/06/2022',
    type:1 // entrada
  },
  {
    id:3,
    label:'Pgto Conta Água',
    value:'450,00',
    date:'02/06/2022',
    type:0 //saida
  },
  {
    id:4,
    label:'Compra Brigadeiro',
    value:'30,00',
    date:'02/06/2022',
    type:0 //saida
  },
  {
    id:5,
    label:'Compra Brigadeiro',
    value:'30,00',
    date:'02/06/2022',
    type:0 //saida
  },
  {
    id:6,
    label:'Compra Brigadeiro',
    value:'30,00',
    date:'02/06/2022',
    type:0 //saida
  },
  {
    id:7,
    label:'Compra Brigadeiro',
    value:'30,00',
    date:'02/06/2022',
    type:1 //saida
  },
  {
    id:8,
    label:'Compra Brigadeiro',
    value:'30,00',
    date:'02/06/2022',
    type:1 //saida
  }]
export default function Home() {
 return (
   <View style={styles.container}>
    <Header name="Lucas Silva"/>
    <Balance saldo='12.000,00'gastos='4.000,00'/>
    <Actions/>
    <MotiText style={styles.title}
    from={{
      translateX:-300,
      opacity:0
    }}
    animate={{
      translateX:0,
      opacity:1
    }}
    transition={{
      type:'timing',
      duration:800,
      delay:500
    }}
    >Ultimas Movimentações</MotiText>
    <MotiView
    from={{
      translateY:1000,
      opacity:0
    }}
    animate={{
      translateY:0,
      opacity:1
    }}
    transition={{
      type:'timing',
      duration:900,
      delay:600
    }}
    >
    <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item} /> }
    />
    </MotiView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14
  },
  list:{
    marginLeft:14,
    marginRight:14,
    marginTop:14
  }
})