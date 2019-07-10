import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import {Inverte,Megasena} from './components/Multi'
import Contador from './components/Contador'
import Plataforma from './components/Plataforma'

export default createDrawerNavigator({
    Plataforma:{
        screen:()=><Plataforma/>
    },
    Contador:{
        screen:()=><Contador inicial={100}/>
    },
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