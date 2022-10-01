import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
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
      alert('Digite o valor do Álcool')
      return;
    }
    if (this.state.input02 === '') {
      alert('Digite o valor da Gasolina')
      return;
    }

    //Basta dividir o preço do litro do etanol pelo da gasolina.
    //Se o resultado for inferior a 0,7, o derivado da cana-de-açúcar é o melhor para abastecer.
    //Se for maior que 0,7, então a gasolina é melhor.

  
  

if ((this.state.input01 / this.state.input02) <= 0.7) {
  this.setState({ resultado: 'ÁLCOOL' });
}
else {
  this.setState({ resultado: 'GASOLINA' });
}

}


  render() {

    let imgGas = 'https://ae01.alicdn.com/kf/HTB1cusgJSzqK1RjSZFjq6zlCFXa7/Boat-Gas-Gauge-Car-Truck-Marine-Fuel-Meter-Motorcycle-Gas-Tank-Gauge-240-33-ohms-9.jpg'

    return (
      <View style={styles.container}>

        <Text style={styles.textoPrincipal}>Álcool ou Gasolina</Text>

        <Image
          source={{ uri: imgGas }}
          style={{borderRadius: 100, width: 150, height: 150, marginHorizontal: 100 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={(texto01) => this.setState({ input01: texto01 })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={(texto02) => this.setState({ input02: texto02 })}
        />

        <Pressable style={styles.botaoCalc} title="Calcular" onPress={this.entrar}>
          <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>

        <Text style={styles.textoResultado}>{this.state.resultado} </Text>

      </View>
    );
  }
}

export default App;
