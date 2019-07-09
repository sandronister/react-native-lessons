import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import {Inverte,Megasena} from './components/Multi'

export default createDrawerNavigator({
    Megasena:{
        screen:()=> <Megasena numeros={8}/>,
        navigationOptions:{title:'Mega Sena'}
    }, 
    Inverte:{
        screen:()=><Inverte texto='Socorram-me subi no onibus em Marrocos'/>
    }, 
    ParImpar:{
        screen:()=><ParImpar numero={30}/>,
        navigationOptions:{title:'Par Impar'}
    }, 
    Simple:{
        screen:()=><Simple texto="Welcome"/>,
        navigationOptions:{title:"Simples"}
    }
},{drawerWidth:300})