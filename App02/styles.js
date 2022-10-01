import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161b22',
    alignItems: 'center',
  },

  area: {
    marginTop: 80,
  },

  textoPrincipal: {
    fontSize: 28,
    color: '#ff8300',
    marginVertical: 20
  },

  textoSecundario: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 20
  },

  botaoPlus:{
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#090',
  },

  botaoMinus:{
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#900'
  },


  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 35,
    color: '#fff',
  },

  textoContagem: {
    fontSize: 120,
    color: '#fff',
    marginVertical: 20,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dotted',
  },



  alinhaTexto: {
    textAlign: 'center',
  },
});

export { styles };
