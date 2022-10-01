import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classificacao: '',
      input01: '',
      input02: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {


    if (this.state.input01 === '') {
      alert('Digite o Peso')
      return;
    }
    if (this.state.input02 === '') {
      alert('Digite a Altura')
      return;
    }

    //Fórmula: IMC = Peso / Altura² 
  


let resultado = (this.state.input01 / (this.state.input02*this.state.input02));

if (resultado < 18.5) {
  this.setState({ classificacao: 'Abaixo do Peso' });
}

else if ((resultado >= 18.5) && (resultado < 25)){
  this.setState({ classificacao: 'Peso Normal' });
}

else if ((resultado >= 25) && (resultado< 30)){
  this.setState({ classificacao: 'Sobrepeso' });
}

else if ((resultado >= 30) && (resultado < 35)){
  this.setState({ classificacao: 'Obesidade Grau I' });
}

else if (resultado >= 35 && resultado < 40){
  this.setState({ classificacao: 'Obesidade Grau II' });
}

else if (resultado >= 40){
  this.setState({ classificacao: 'Obesidade Grau III ou Mórbida' });
}



}


  render() {

    let imgIMC = 'https://cirurgiabrasilia.com/wp-content/uploads/2020/07/tabela_imc.png'

    return (
      <View style={styles.container}>

        <Text style={styles.textoPrincipal}>Cálculo do IMC</Text>

        <Image
          source={{ uri: imgIMC }}
          style={{width: '70%', height: '30%'}}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso"
          onChangeText={(texto01) => this.setState({ input01: texto01 })}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          onChangeText={(texto02) => this.setState({ input02: texto02 })}
        />

        <Pressable style={styles.botaoCalc} title="Calcular" onPress={this.entrar}>
          <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>

        <Text style={styles.textoClassificacao}>{this.state.classificacao} </Text>

      </View>
    );
  }
}

export default App;
