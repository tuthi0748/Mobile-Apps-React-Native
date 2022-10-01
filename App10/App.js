import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados00: '',
      dados1: '',
      
      dadosInformados: '',
      input01: '',    
      
      origens: [
        { nome: 'De: (Moeda)' },
        { nome: 'Real (BRL)', origem: '1' },
        { nome: 'Dólar (USD)', origem: '2' },
        { nome: 'Euro (EUR)', origem: '3' },
      ],

      destino: 0,
      destinos: [
        { nome: 'Para: (Moeda)' },
        { nome: 'Real (BRL)', destino: '1' },
        { nome: 'Dólar (USD)', destino: '2' },
        { nome: 'Euro (EUR)', destino: '3' },
      ]
    };


{/* -----   1 Real/BRL = 0,2113271 Dólar dos Estados Unidos/USD    --------    */}
{/* -----   1 Real/BRL = 0,1959094 Euro/EUR    --------    */}


{/* -----   1 Dólar dos Estados Unidos/USD = 0,9270418 Euro/EUR   --------    */}
{/* -----   1 Dólar dos Estados Unidos/USD = 4,732 Real/BRL   --------    */}
{/* -----   1 Euro/EUR = 5,1044 Real/BRL   --------    */}
{/* -----   1 Euro/EUR = 1,0787 Dólar dos Estados Unidos/USD   --------    */}






    this.converter = this.converter.bind(this);

  }

  converter()   { 


    if (this.state.input01 === '') {
      alert('Digite o valor')
      return;
    }

    
    this.setState({ dados00: 'Resultado:'});
    this.setState({ dados1: 'Conversão: ' + this.state.input01 * this.state.origem * this.state.destino});


   // this.setState({ resultado: 'Resultado: ' + this.state.input01 * this.state.input02 });


    this.setState({ dados3: 'Origem: ' + this.state.origens[this.state.origem].nome });
    this.setState({ dados4: 'Destino: ' + this.state.destinos[this.state.destino].destino });

  }


render() {

  let origemsItem = this.state.origens.map((origem, chave) => {
    return <Picker.Item key={chave} value={chave} label={origem.nome} />
  })

  let destinosItem = this.state.destinos.map((destino, chave) => {
    return <Picker.Item key={chave} value={chave} label={destino.nome} />
  })


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Conversor de Moedas</Text>
      <Text style={styles.logo}>Dólar, Real e Euro</Text>


      <View style={styles.box}>
      {/*  --------------------------     Valor   ------------------------------------*/}

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textoPrincipal}>Valor: </Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto01) => this.setState({ input01: texto01 })}
        />
      </View>


      {/*  --------------------------     Origem   ------------------------------------*/}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
        <View style={{ flex: .8 }}>
          <Text style={styles.textoPrincipal2}>De: </Text>
        </View>

        <View style={{ flex: -.3 }}>
          <Picker style={styles.Picker} mode="dropdown"
            selectedValue={this.state.origem}
            onValueChange={(itemValue, itemIndex) => this.setState({ origem: itemValue })}
          >
            {origemsItem}
          </Picker>
        </View>

      </View>

      {/*  --------------------------     Destino  ------------------------------------*/}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        
        <View style={{ flex: .8 }}>
          <Text style={styles.textoPrincipal2}>Para: </Text>
        </View>
        
        <View style={{ flex: -.3 }}>
          <Picker style={styles.Picker} mode="dropdown"
            selectedValue={this.state.destino}
            onValueChange={(itemValue, itemIndex) => this.setState({ destino: itemValue })}
          >
            {destinosItem}
          </Picker>
          </View>
        
        </View>
   

    



      {/*  --------------------------    BOTÃO CONVERTER  ------------------------------------*/}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Pressable style={styles.botaoConverter} title="Converter" onPress={this.converter}>
          <Text style={styles.textoBotao}>Converter</Text>
        </Pressable>
        
      </View>

      {/*  --------------------------    DADOS INFORMADOS   ------------------------------------*/}

      <View>

        <Text style={{ color: '#F34', fontWeight: 'bold', textAlign: 'center', fontSize: 28, marginTop: 100 }}>
          {this.state.dados00}
          </Text>

          <Text style={{ color: '#F34', fontWeight: 'bold', textAlign: 'center', fontSize: 25, marginVertical: 5 }}>
          {this.state.dados1}
          </Text>
      
      </View>

      </View>
    </View>
  );

}
}


{/*  --------------------------    STYLES   ------------------------------------*/}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,

  },

  box: {
    padding: 20,
    margin: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff8300'
  },
  textoPrincipal: {
    fontSize: 20,
    color: '#000'
  },
  textoPrincipal2: {
    fontSize: 20,
    color: '#000'
  },
  origens: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center'
  },
  Picker: {
    width: 240,
    backgroundColor: '#eee'
  },
  input: {
    width: 240,
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#f00',
  },
  botaoConverter: {
    width: 350,
    height: 50,
    margin: 20,
    backgroundColor: '#0af',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
    color: '#fff',
  },
  textoDados: {
    textAlign: 'center',
    fontSize: 18,
    color: '#f00',
    textDecorationLine: 'underline',
  },

});
