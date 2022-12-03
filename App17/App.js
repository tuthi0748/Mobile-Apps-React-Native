import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';

 
class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      cep: [],
      cepSolicitado: '',
      cepResultado: '',  
    };
    this.retorno = this.retorno.bind(this);
  }


 
  async retorno() {
    let cepSolicitado = this.state.cepSolicitado;
    const response = await api.get(`ws/${cepSolicitado}/json`);
    this.setState({
      cep: response.data,
    });
    this.setState({
      cepResultado: `
      Dados da busca: \n
        • CEP: ${this.state.cep.cep} \n
        • Logradouro: ${this.state.cep.logradouro} \n
        • Bairro: ${this.state.cep.bairro} \n
        • Cidade: ${this.state.cep.localidade} \n
        • Estado: ${this.state.cep.uf}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.row}>
          <Text style={styles.title}>CEP x Endereço</Text>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Digite o CEP: "
            style={styles.input}
            onChangeText={(value) => this.setState({ cepSolicitado: value })}
            keyboardType="numeric"
          />

          <TouchableOpacity style={{ paddingLeft: 15, paddingTop:10 }} onPress={this.retorno}>
            <Feather name='search' size={30} color='#f00' />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
        
          <Text style={styles.resultado}>
            {this.state.cepResultado}
          </Text>
        
        </View>
       
        <View style={styles.box1}>
      
          <Text style={{ color: '#fff', fontSize: 16 }}>
            
          </Text>
      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#fff'
  },
  row: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 325,
    backgroundColor: '#EEEEEE',
    borderColor: '#fff',
    color: '#000',
  },
  resultado: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 15
  },
  box: {
    color: 'white',
    marginTop: 40,
    margin: 20,
    
    
  },
  box1: {
    backgroundColor: '#fff',
    paddingTop: 80,
    color: '#f00',
    marginTop: 600,
    margin: 20,
  },
});

export default App;