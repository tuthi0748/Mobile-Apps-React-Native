import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {

    //Para gerar um número aleatório de 0 a 10, 
    //você pode usar o função: Math.floor(Math.random() * 10)

  this.setState({resultado: Math.floor(Math.random() * 10)});

}


  render() {

    let imgCharada = 'https://cdn4.vectorstock.com/i/1000x1000/70/18/blue-glowing-outline-neon-question-mark-or-sign-on-vector-24987018.jpg'

    return (
      <View style={styles.container}>

        <Text style={styles.textoPrincipal}>Jogo do Nº Aleatório</Text>

        <Image
          source={{ uri: imgCharada }}
          style={{borderRadius: 100, borderColor: '#7fc', borderWidth: 4, width: 150, height: 150, marginHorizontal: 100 }}
        />

     
      <Text style={styles.textoSecundario}>Pense em um nº de 0 a 10</Text>

       <Text style={styles.textoResultado}>      {this.state.resultado}      </Text>

       <Pressable style={styles.botaoCalc} title="Calcular" onPress={this.entrar}>
          <Text style={styles.textoBotao}>Descobrir</Text>
        </Pressable>

      </View>
    );
  }
}

export default App;
