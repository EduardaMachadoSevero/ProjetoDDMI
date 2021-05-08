//// EDUARDA MACHADO SEVERO - 6° INFO ////

import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';

import MeuEstilo from './src/componentes/meuestilo'

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  
  soma(){ //somar os valores

    this.state.resultado= parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  subtrair(){ //subtrair os valores

    this.state.resultado= parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  multiplicar(){ //multiplicar os valores

    this.state.resultado= parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  dividir(){ //dividir os valores

    this.state.resultado= parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render(){     ///criar os campos para digitar os valores///
    return(

      <View style = {MeuEstilo.container}>

        <StatusBar backgroundColor="black"/>  
        <TextInput style = {MeuEstilo.input}
        underlineColorAndroid = "transparent" 
        placeholder = " Digite o valor 1 "
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.atualizaValor1}
        keyboardType ='numeric'/>

        <TextInput style = {MeuEstilo.input}
        underlineColorAndroid = "transparent" 
        placeholder = " Digite o valor 2 "
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.atualizaValor2}
        keyboardType ='numeric'/>

      <TouchableOpacity style = {MeuEstilo.botao} 
      onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)} //chamar as funções
      >
        
       <Text style = {MeuEstilo.textoBotaoSomar}> SOMAR </Text>
       
      </TouchableOpacity>

      <TouchableOpacity style = {MeuEstilo.botaoS} 
      onPress={()=>this.subtrair(this.state.valor1, this.state.valor2, this.state.resultado)} 
      >
        
       <Text style = {MeuEstilo.textoBotaoSubtrair}> SUBTRAIR </Text>
       
      </TouchableOpacity>

      <TouchableOpacity style = {MeuEstilo.botaoM} 
      onPress={()=>this.multiplicar(this.state.valor1, this.state.valor2, this.state.resultado)} 
      >
        
       <Text style = {MeuEstilo.textoBotaoMultiplicar}> MULTIPLICAR </Text>
       
      </TouchableOpacity>

      <TouchableOpacity style = {MeuEstilo.botaoD} 
      onPress={()=>this.dividir(this.state.valor1, this.state.valor2, this.state.resultado)} 
      >
        
       <Text style = {MeuEstilo.textoBotaoDividir}> DIVIDIR </Text>
       
      </TouchableOpacity>
      </View>
      
    )
  }
}      

    