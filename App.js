//// EDUARDA MACHADO SEVERO - 6° INFO ////

import * as React from 'react';
import { TouchableOpacity, TextInput, View, ScrollView, StatusBar} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import MeuEstilo from './src/component/meunovoestilo'

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0,
    valorRadio: 'soma',
    
  }
  calcular(){
    if(this.state.valorRadio=='soma'){
      alert(this.state.valorRadio);
    }
    if(this.state.valorRadio=='subtrair'){
      alert(this.state.valorRadio);
    }
    if(this.state.valorRadio=='multiplicar'){
      alert(this.state.valorRadio);
    }
    if(this.state.valorRadio=='dividir'){
      alert(this.state.valorRadio);
    }
  }
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  
  soma(){ //somar os valores

    this.state.valorRadio= parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    
  }

  subtrair(){ //subtrair os valores

    this.state.valorRadio= parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
   
  }

  multiplicar(){ //multiplicar os valores

    this.state.valorRadio= parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    
  }

  dividir(){ //dividir os valores

    this.state.valorRadio= parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
  
  
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

<ScrollView style = {{marginTop:30}}>
        <Text>Radio Button utilizando classe Expo</Text>
        <RadioButton.Group
        onValueChange = {valorRadio => this.setState({valorRadio})}
        value = {this.state.valorRadio}>
          <View>
            <Text>Soma</Text>
            <RadioButton value='soma'/>
          </View>
          <View>
            <Text>Subtrair</Text>
            <RadioButton value='subtrair'/>
          </View>
          <View>
            <Text>Multiplicar</Text>
            <RadioButton value='multiplicar'/>
          </View>
          <View>
            <Text>dividir</Text>
            <RadioButton value='dividir'/>
          </View>
        </RadioButton.Group>

        <TouchableOpacity style = {MeuEstilo.botao} 
      onPress={()=>this.calcular(this.state.valorRadio)} //chamar as funções
      >
        
       <Text style = {MeuEstilo.textoBotao}> CALCULAR</Text>
       
      </TouchableOpacity>
      </ScrollView>
      </View>
      
    )
  }
}      

    