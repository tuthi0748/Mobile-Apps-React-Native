import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#161b22',
    //backgroundColor: '#fff',
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

  botaoCalc: {
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#0a3',
  },


  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
    color: '#fff',
  },

  input: {
    textAlign: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 20,
    paddingHorizontal: 60,
    width: 320,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ff8300'
  },

  textoClassificacao: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ff8300',
    textDecorationLine: 'underline',
  },


});

export { styles };
