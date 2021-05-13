import {StyleSheet} from 'react-native'

export default StyleSheet.create({   //edição dos botões

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
       
       textoBotao:{
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







