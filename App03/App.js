import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      input01: '',
      input02: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {

    if (this.state.input01 === '') {
      alert('Digite o primeiro número')
      return;
    }
    if (this.state.input02 === '') {
      alert('Digite o segundo número')
      return;
    }

    this.setState({ resultado: 'Resultado: ' + this.state.input01 * this.state.input02 });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textoPrincipal}>Multiplicador de Números</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro nº"
          onChangeText={(texto01) => this.setState({ input01: texto01 })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo nº"
          onChangeText={(texto02) => this.setState({ input02: texto02 })}
        />

        <Pressable style={styles.botaoCalc} title="Calcular" onPress={this.entrar}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>

        <Text style={styles.texto}>{this.state.resultado} </Text>

      </View>
    );
  }
}

export default App;
