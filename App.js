import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';

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
}       //edição dos botões

    const MeuEstilo = StyleSheet.create({

        fontegrande:{
        fontSize: 48,
        //backgroundColor:'#333333',
        color:'#111111',
        flexGrow: 3,
        justifyContent: "center",
        alignItems: "center",
        padding: 23,
   },

        container:{
        padding: 23,
   },

        input:{
        margin: 15,
        height: 40,
        borderColor: '#613F75',
        borderWidth: 3,
        borderRadius: 4,
        backgroundColor:'#FAF8F8',
        
   },
        botao:{  
        backgroundColor: '#e5c3d1',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,             
      
  },
        botaoS:{  
        backgroundColor: '#613F75',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,    
}, 
        botaoM:{  
        backgroundColor: '#7D82B8',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,   
},
        botaoD:{  
        backgroundColor: '#DF9BFB',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,  
  
},

       textoBotaoSomar:{
       color:'white',
       alignItems:'center',
       textAlign:'center',
   },
       textoBotaoSubtrair:{  
       color:'white',
       alignItems:'center',
       textAlign:'center',
},
       textoBotaoMultiplicar:{   
       color:'white',
       alignItems:'center',
       textAlign:'center',
},
       textoBotaoDividir:{  
       color:'white',
       alignItems:'center',
       textAlign:'center',
},
       switchstilo:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
  }

})