import React from 'react'
import {View,Text} from 'react-native'
import Padrao from '../styles/padrao'
import If from './If'


export default props =>
   <View>
       <If test={props.numero % 2 ==0}>
           <Text style={Padrao.ex}>Par</Text>
       </If>
       <If test={props.numero %2 != 0}>
           <Text style={Padrao.ex}>Impar</Text>
       </If>
   </View>
