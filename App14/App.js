import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fundo: '',
      tamanho: '',
    };
  }


  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount() {
    await AsyncStorage.getItem('fundo').then((value) => {
      this.setState({ fundo: value });
    });

    await AsyncStorage.getItem('tamanho').then((value) => {
      this.setState({ tamanho: value });
    });
  }

  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState) {
    const fundo = this.state.fundo;
    const tamanho = this.state.tamanho;

    await AsyncStorage.setItem('fundo', JSON.stringify(fundo));
    await AsyncStorage.setItem('tamanho', JSON.stringify(tamanho));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Frases</Text>


        <View style={styles.linha}>
          <Text> {(this.state.fundo) ? "Dia" : "Noite"}
          </Text>
          <Switch
            value={this.state.fundo == 1 ? true : false}
            onValueChange={(valorSwitch) =>
              this.setState({ fundo: valorSwitch ? 1 : 0 })
            }
            thumbColor={this.state.fundo == 0 ? 'white' : 'gray'}
            backgroundColor={this.state.containerBox == 0 ? '#222' : '#fff'}
          />

          <Text>{(this.state.tamanho) ? "Pequeno" : "Grande"}</Text>

          <Switch
            value={this.state.tamanho == 1 ? true : false}
            onValueChange={(valorSwitch) =>
              this.setState({ tamanho: valorSwitch ? 1 : 0 })}
            thumbColor={this.state.tamanho == 0 ? 'white' : 'gray'}
          />

        </View>

        <View style={{
          backgroundColor: `${this.state.fundo == 1 ? 'white' : '#333'}`,
          borderColor: `${this.state.fundo == 1 ? 'black' : 'gray'}`,
          borderWidth: 2,
          flex: 1,
          margin: 20,
          alignItems: 'center'
        }}>


          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              color: `${this.state.fundo == 1 ? 'black' : '#fff'}`,
              fontWeight: `${this.state.tamanho == 1 ? 'bold' : 'normal'}`,
              fontSize: 15,
              marginTop: 15,
              textAlign: 'center',
              flex: 1, flexDirection: 'row'
            }}>
              "A vingança nunca é plena, mata a alma e envenena" {'\n'} {'\n'}
              (Seu Madruga)  {'\n'} </Text>
          </View>


          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              color: `${this.state.fundo == 1 ? 'black' : '#fff'}`,
              fontWeight: `${this.state.tamanho == 1 ? 'bold' : 'normal'}`,
              fontSize: 15,
              marginTop: 15,
              textAlign: 'center',
              flex: 1, flexDirection: 'row'
            }}>
              "Quem com ferro fere, com ferro será ferido" {'\n'} {'\n'}
              (Anônimo)</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    fontSize: 20,
  },

  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  viewFrase: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  linha: {
    marginTop: 10,
    flexDirection: 'row',
  },

  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    textAlign: 'center',
    flex: 1, flexDirection: 'row',
  }
});
