import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      from: 'BTC',
      to: 'BRL',
      resultado: [],
    };
    this.calcular = this.calcular.bind(this);
  }

  async calcular() {
    if (this.state.valor == '') {
      this.setState({ resultado: 'Digite o valor a converter' });
    } else {
      let valor = parseInt(this.state.valor);
      let from = this.state.from;
      let to = this.state.to;
      let final = this.state.from + this.state.to;
      console.log(this.state.valor, this.state.from, this.state.to);
      let response = await api.get(
        `https://economia.awesomeapi.com.br/json/last/${from}-${to}`
      );
      var resultado = 0;

      switch (from) {
        case 'BRL':
          switch (to) {
            case 'BTC':
              resultado = (response.data.BTCEUR.bid * valor).toFixed(2);
              break;
            case 'USD':
              resultado = (response.data.BRLUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BRLEUR.bid * valor).toFixed(2);
              break;           
          }
          break;
        case 'USD':
          switch (to) {
            case 'BRL':
              resultado = (response.data.USDBRL.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.USDEUR.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'EUR':
          switch (to) {
            case 'USD':
              resultado = (response.data.EURUSD.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.EURBRL.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'BTC':
          switch (to) {
            case 'USD':
              resultado = (response.data.BTCUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BTCEUR.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.BTCBRL.bid * valor * 1000).toFixed(2);
              break;
          }
      }
      
      this.setState({
        resultado: resultado,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <View style={styles.box}>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            placeholder="Digite o valor"
            style={styles.input}  
            keyboardType="numeric"
            value={this.state.valor}
            onChangeText={(value) => {
              this.setState({ valor: value });
            }}
          />
        </View>



        <View style={styles.box}>
          <Text style={styles.text}>De</Text>
          <Picker
            style={styles.options}
            selectedValue={this.state.from}
            onValueChange={(valor) => {
              this.setState({ from: valor });
            }}>
            <Picker.Item key={1} value={'BTC'} label="Bitcoin" />
            <Picker.Item key={2} value={'BRL'} label="Real" />
            <Picker.Item key={3} value={'USD'} label="Dólar" />
            <Picker.Item key={4} value={'EUR'} label="Euro" />
          </Picker>
        </View>


        <View style={styles.box}>
          <Text style={styles.text}>Para</Text>

          <Picker
            style={styles.options}
            selectedValue={this.state.to}
            onValueChange={(valor) => {
              this.setState({ to: valor });
            }}>

            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'USD'} label="Dólar" />
            <Picker.Item key={3} value={'EUR'} label="Euro" />

          </Picker>
        </View>


        <TouchableOpacity
          style={styles.btn}
          onPress={this.calcular}>
          <Text
            style={{
              fontSize: 22,
              color: '#fff',
              alignItems: 'center',
            }}>
          Calcular
          </Text>
        </TouchableOpacity>
    

        <View>
          <Text
            style={{
              fontSize: 26,
              margin: 10,
              color: '#ff5',
              textAlign: 'center',
            }}>
            {this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
  },
  title: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding: 15,
    fontSize: 30,

  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 30,
    width: '75%',
    height: 45,
    marginLeft: 25,
    fontSize: 20,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    marginTop: 30,
  },
  options: {
    width: 150,
    fontSize: 50,
    color: '#ff5',
    marginTop: 25,
    marginLeft: 30,
  },
  btn: {
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 50,
    borderStyle: 'dashed',
    borderColor: '#ff5',
    color: 'white',
    padding: 5,
    marginLeft: 150,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 130
  }
});

export default App;