import React , {Component} from 'react'
import {View,StyleSheet} from 'react-native'
import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import {Inverte,Megasena} from './components/Multi'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Simple texto="Agora vai"/>
        <ParImpar numero={32}/>
        <Inverte texto="Marrocos"/>
        <Megasena/>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  }
})